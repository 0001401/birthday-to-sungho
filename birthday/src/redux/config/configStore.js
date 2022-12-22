import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { letter } from "../modules/letterSlice";

export const store = configureStore({
  reducer: {
    letter,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
