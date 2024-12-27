import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  isAuthenticated: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    authenticationPending: (state) => {
      state.isAuthenticated = false;
    },
    authenticationCompleted: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { openModal, closeModal, authenticationPending, authenticationCompleted } = globalSlice.actions;

export default globalSlice.reducer;
