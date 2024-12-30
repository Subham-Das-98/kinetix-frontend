import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModalOpen: false,
  isAuthenticated: true,
  uploadProgress: 0,
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
    setUploadProgress: (state, action) => {
      state.uploadProgress = action.payload;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  authenticationPending,
  authenticationCompleted,
  setUploadProgress,
} = globalSlice.actions;

export default globalSlice.reducer;
