import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
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
  },
});

export const { openModal, closeModal } = globalSlice.actions;

export default globalSlice.reducer;
