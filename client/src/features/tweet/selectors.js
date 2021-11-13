import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state.tweet;

export const selectTweetList = createSelector(
  selectSelf,
  (state) => state.tweetList,
);

export const selectKeyword = createSelector(
  selectSelf,
  (state) => state.keyword,
);

export const selectHasTweets = createSelector(
  selectSelf,
  (state) => state.hasTweets,
);

export const selectStreamStatus = createSelector(
  selectSelf,
  (state) => state.streamStatus,
);
