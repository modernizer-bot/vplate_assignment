import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tweetList: [],
  keyword: '',
};

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    connectWithStreamServer: () => {},
    initTweetStream: () => {},
    closeTweetStream: () => {},
    addTweet: (state, { payload: tweet }) => {
      state.tweetList.push(tweet);
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
