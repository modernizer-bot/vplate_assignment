import http from 'http';
import express from 'express';
import socketIo from 'socket.io';
import dotenv from 'dotenv';

import TwitterStreamHelper from './apis/twitter.js';
import createTweetInfo from './utils/createTweetInfo.js';
import { TWEETS_COUNT_AT_ONCE } from './constants/tweets.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const TOKEN = process.env.TWITTER_BEARER_TOKEN;

const app = express();

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

app.get('/', (req, res) => {
  res.json({ status: true });
});

const streamHelper = new TwitterStreamHelper(TOKEN);
const { connectStream, getStreamRules, editStreamRules } = streamHelper;

io.on('connection', (socket) => {
  console.log(`${socket.id} is connected`);

  socket.on('stream.open', async ({ keyword }) => {
    try {
      await streamRuleSetting(keyword);
      const stream = connectStream();

      let tweetCount = 0;

      stream.on('data', (data) => {
        if (tweetCount === TWEETS_COUNT_AT_ONCE) {
          socket.emit('stream.close');
          stream.request.abort();

          return;
        }

        const tweetInfo = createTweetInfo(data);

        socket.emit('tweet.new', { tweetInfo });
        tweetCount += 1;
      });

      socket.on('tweet.noResult', () => {
        socket.emit('stream.close');
        stream.request.abort();
      });

      let timeout = 0;

      stream.on('timeout', () => {
        // Reconnect on error
        console.warn('A connection error occurred. Reconnecting…');
        setTimeout(() => {
          timeout += 1;
          connectStream();
        }, 2 ** timeout);
        connectStream();
      });
    } catch (err) {
      console.log(err);
    }
  });
});

server.listen(PORT, () => `Listening on port ${PORT}`);

// ** Function Declaration **

async function getRules() {
  const response = await getStreamRules();

  return response.body;
}

// Set stream rules
const setRules = async (rules) => {
  const data = {
    add: rules,
  };

  await editStreamRules(data);
};

// Delete stream rules
async function deleteRules(rules) {
  if (!Array.isArray(rules.data)) {
    return null;
  }

  const ids = rules.data.map((rule) => rule.id);

  const data = {
    delete: {
      ids,
    },
  };

  await editStreamRules(data);
}

async function streamRuleSetting(keyword) {
  // Get all stream rules
  const prevRules = await getRules();
  // Delete all stream rules
  await deleteRules(prevRules);

  const nextRules = [{ value: keyword }];
  // Set rules based on array above
  await setRules(nextRules);
}
