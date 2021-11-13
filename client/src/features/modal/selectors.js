import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state.modal;

export const selectModalMessage = createSelector(
  selectSelf,
  (state) => state.message,
);
