import http from 'http';
import express from 'express';
import socketIo from 'socket.io';
import needle from 'needle';
import dotenv from 'dotenv';

dotenv.config();

const TOKEN = process.env.TWITTER_BEARER_TOKEN;
const PORT = process.env.PORT || 5000;

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

const OPTIONS =
  '?tweet.fields=public_metrics&user.fields=id,profile_image_url&expansions=author_id,attachments.media_keys&media.fields=preview_image_url,url';

const TWITTER_STREAM_URL = `https://api.twitter.com/2/tweets/search/stream${OPTIONS}`;
const TWITTER_STREAM_RULE_URL =
  'https://api.twitter.com/2/tweets/search/stream/rules';

// Connect with Twitter Stream
const streamTweets = (socket) => {
  const stream = needle.get(TWITTER_STREAM_URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  let tweetCount = 0;

  stream.on('data', (data) => {
    try {
      if (tweetCount === 10) {
        socket.emit('stream.close');
        stream.request.abort();
        return;
      }

      const json = JSON.parse(data);
      console.log('json', json);

      const { id, text, public_metrics: publicMetrics } = json.data;
      const { users, media } = json.includes;

      delete publicMetrics.quote_count;

      console.log('트윗 발견');
      const tweetInfo = {
        id,
        publicMetrics,
        content: {
          text,
        },
        author: users[0],
      };

      if (media) {
        tweetInfo.content.mediaUrl = media[0].preview_image_url
          ? media[0].preview_image_url
          : media[0].url;
      }

      socket.emit('tweet.new', { tweetInfo });
      tweetCount += 1;
    } catch (err) {
      console.log(err);
    }
  });

  return stream;
};

// Get stream rules
const getRules = async () => {
  const response = await needle('get', TWITTER_STREAM_RULE_URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  // console.log(response.body);
  return response.body;
};

// Set stream rules
const setRules = async (rules) => {
  const data = {
    add: rules,
  };

  await needle('post', TWITTER_STREAM_RULE_URL, data, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};

// Delete stream rules
const deleteRules = async (rules) => {
  if (!Array.isArray(rules.data)) {
    return null;
  }

  const ids = rules.data.map((rule) => rule.id);

  const data = {
    delete: {
      ids,
    },
  };

  await needle('post', TWITTER_STREAM_RULE_URL, data, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};

io.on('connection', (socket) => {
  console.log(`${socket.id} is connected`);

  socket.on('stream.open', async ({ keyword }) => {
    try {
      // Get all stream rules
      const currentRules = await getRules();
      // Delete all stream rules
      await deleteRules(currentRules);
      console.log('keyword', keyword);
      const rules = [{ value: keyword }];
      // Set rules based on array above
      await setRules(rules);
    } catch (err) {
      console.log('4', err);
    }

    console.log('filteredStream connect');
    const filteredStream = streamTweets(io);

    socket.on('tweet.noResult', () => {
      socket.emit('stream.close');
      console.log('결과없어서 강제 종료');
      filteredStream.request.abort();
    });

    let timeout = 0;
    filteredStream.on('timeout', () => {
      // Reconnect on error
      console.warn('A connection error occurred. Reconnecting…');
      setTimeout(() => {
        timeout += 1;
        streamTweets(io);
      }, 2 ** timeout);
      streamTweets(io);
    });
  });
});

server.listen(PORT, () => `Listening on port ${PORT}`);
