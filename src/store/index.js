import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import petsSlice from "./pets/petsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    pets: petsSlice,
  },
});
