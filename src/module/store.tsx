"use client";

import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./sclices/userSlice2"
import rootReducers from "./sclices/reducers";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: rootReducers,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
