import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import videoApi from "../api/videoApi.js";
import userApi from "../api/userApi.js";
import authSlice from "../features/auth/authSlice.js";
import globalSlice from "../features/global/globalSlice.js";

const store = configureStore({
  reducer: {
    global: globalSlice,
    auth: authSlice,
    [videoApi.reducerPath]: videoApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(videoApi.middleware)
      .concat(userApi.middleware),
});

setupListeners(store.dispatch);

export default store;
