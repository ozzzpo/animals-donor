import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import petsSlice from "./pets/petsSlice";
import searchCardsSlice from "./searchCards/searchCardsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    pets: petsSlice,
    searchCards: searchCardsSlice,
  },
});
