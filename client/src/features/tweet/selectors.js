import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state;

export const selectTweetList = createSelector(
  selectSelf,
  (state) => state.tweetList,
);

export const selectKeyword = createSelector(
  selectSelf,
  (state) => state.keyword,
);
