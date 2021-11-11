import http from "http";
import express from "express";
import socketIo from "socket.io";
import needle from "needle";
import dotenv from "dotenv";

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

app.get("/", (req, res) => {
  res.json({ status: true });
});

const OPTIONS =
  "?tweet.fields=public_metrics&user.fields=id,profile_image_url&expansions=author_id,attachments.media_keys&media.fields=preview_image_url,url";

const TWITTER_STREAM_URL = `https://api.twitter.com/2/tweets/search/stream${OPTIONS}`;
const TWITTER_STREAM_RULE_URL =
  "https://api.twitter.com/2/tweets/search/stream/rules";

// const streamConnect = (socket, retryAttempt) => {
//   const stream = needle.get(TWITTER_STREAM_URL, {
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//     },
//     timeout: 20000,
//   });
//   let tweetCount = 0;
//   stream
//     .on("data", (data) => {
//       try {
//         if (tweetCount > 5) {
//           console.log("tweetCount === 5");
//           stream.request.abort();
//         }
//         const json = JSON.parse(data);
//         socket.emit(tweet.new, json);
//         console.log(json.data.id);
//         // console.log("유저", json.includes.users);
//         // console.log("미디어", json.includes.media);
//         tweetCount++;

//         // A successful connection resets retry count.
//         retryAttempt = 0;
//       } catch (e) {
//         // Catches error in case of 401 unauthorized error status.
//         if (data.status === 401) {
//           console.log("1", data);
//         } else if (
//           data.detail ===
//           "This stream is currently at the maximum allowed connection limit."
//         ) {
//           console.log("2", data.detail);
//         }
//       }
//     })
//     .on("err", (error) => {
//       if (error.code !== "ECONNRESET") {
//         console.log("3", error.code);
//       } else {
//         setTimeout(() => {
//           console.warn("A connection error occurred. Reconnecting...");
//           streamConnect(socket, ++retryAttempt);
//         }, 2 ** retryAttempt);
//       }
//     });
//   return stream;
// };

const streamTweets = (socket) => {
  const stream = needle.get(TWITTER_STREAM_URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  let tweetCount = 0;

  stream.on("data", (data) => {
    try {
      if (tweetCount > 5) {
        stream.request.abort();
      } else {
        const json = JSON.parse(data);
        console.log(json.data.id);
        socket.emit("tweet.new", json);
        tweetCount++;
      }
    } catch (error) {}
  });

  return stream;
};

// Get stream rules
const getRules = async () => {
  const response = await needle("get", TWITTER_STREAM_RULE_URL, {
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

  await needle("post", TWITTER_STREAM_RULE_URL, data, {
    headers: {
      "content-type": "application/json",
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
      ids: ids,
    },
  };

  const response = await needle("post", TWITTER_STREAM_RULE_URL, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  console.log(response.body);
};

io.on("connection", (socket) => {
  console.log(`${socket.id} is connected`);

  socket.on("stream.init", async ({ keyword }) => {
    try {
      // Get all stream rules
      const currentRules = await getRules();
      // Delete all stream rules
      await deleteRules(currentRules);
      console.log("keyword", keyword);
      const rules = [{ value: keyword }];
      // Set rules based on array above
      await setRules(rules);
    } catch (err) {
      console.log("4", err);
    }

    console.log("filteredStream connect");
    const filteredStream = streamTweets(io);

    let timeout = 0;
    filteredStream.on("timeout", () => {
      // Reconnect on error
      console.warn("A connection error occurred. Reconnecting…");
      setTimeout(() => {
        timeout++;
        streamTweets(io);
      }, 2 ** timeout);
      streamTweets(io);
    });
  });
});

server.listen(PORT, () => `Listening on port ${PORT}`);