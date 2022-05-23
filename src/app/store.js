import { configureStore } from "@reduxjs/toolkit";

import carReducer from "../components/Features/car/carSlice";

export const store = configureStore({
  reducer: {
    caring: carReducer,
  },
});
