import { configureStore } from "@reduxjs/toolkit";
// import globalReducer from "./slices/globalSlice";
import elevatorDataReducer from "./slices/elevatorData";

export const store = configureStore({
  reducer: {
    elevatorData: elevatorDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
