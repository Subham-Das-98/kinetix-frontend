import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: JSON.parse(localStorage.getItem("loginStatus")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.loginStatus = action.payload.loginStatus;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("loginStatus", action.payload.loginStatus);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    unauthUser: (state) => {
      state.loginStatus = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("loginStatus");
      localStorage.removeItem("user");
    },
  },
});

export const { authUser, unauthUser } = authSlice.actions;

export default authSlice.reducer;
