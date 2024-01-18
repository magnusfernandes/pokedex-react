import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { appReducer } from "./slices";

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
