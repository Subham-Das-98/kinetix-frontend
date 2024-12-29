import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModalOpen: false,
  isAuthenticated: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    authenticationPending: (state) => {
      state.isAuthenticated = false;
    },
    authenticationCompleted: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { openLoginModal, closeLoginModal, authenticationPending, authenticationCompleted } = globalSlice.actions;

export default globalSlice.reducer;
