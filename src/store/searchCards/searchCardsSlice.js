import { createSlice } from "@reduxjs/toolkit";
import {
  addSearchCard,
  fetchSearchCards,
  getSearchCardById,
  getFirstActiveSearchCards,
} from "./actions";
const searchCardsSlice = createSlice({
  name: "searchCards",
  initialState: {
    searchCards: [],
    lastSearchCards: [],
    status: "ready",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchCards.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSearchCards.fulfilled, (state, action) => {
      state.status = "loading";
      state.searchCards = action.payload;
    });
    builder.addCase(fetchSearchCards.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(getSearchCardById.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getSearchCardById.fulfilled, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getSearchCardById.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(addSearchCard.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addSearchCard.fulfilled, (state, action) => {
      state.status = "loading";
      state.searchCards.push(action.payload);
    });
    builder.addCase(addSearchCard.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(getFirstActiveSearchCards.fulfilled, (state, action) => {
      state.lastSearchCards = action.payload;
    });
  },
});

export default searchCardsSlice.reducer;
