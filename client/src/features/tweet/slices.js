import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tweetList: [],
  keyword: '',
  hasTweets: false,
  streamStatus: false,
};

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    connectWithStreamServer: () => {},
    initTweetStream: (state) => {
      state.streamStatus = true;
    },
    closeTweetStream: (state) => {
      state.streamStatus = false;
    },
    addTweet: (state, { payload: tweet }) => {
      state.tweetList.push(tweet);
      if (!state.hasTweets) {
        state.hasTweets = true;
      }
    },
    changeKeyword: (state, { payload: keyword }) => {
      state.keyword = keyword;
      state.tweetList = [];
    },
  },
});

export const {
  connectWithStreamServer,
  initTweetStream,
  closeTweetStream,
  addTweet,
  changeKeyword,
} = tweetSlice.actions;

export default tweetSlice.reducer;
