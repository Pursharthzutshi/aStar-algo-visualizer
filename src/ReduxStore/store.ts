import { configureStore } from "@reduxjs/toolkit";
import AlgorithimSlicer from "../ReduxSlicers/AlgorithimSlicer";

export const store = configureStore({
  reducer: {
    AlgorithimSlicer: AlgorithimSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;