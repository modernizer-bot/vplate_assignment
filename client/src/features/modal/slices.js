import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload: message }) => {
      state.message = message;
    },
    closeModal: (state) => {
      state.message = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
