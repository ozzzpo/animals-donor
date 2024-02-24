import { createAsyncThunk } from "@reduxjs/toolkit";
import searchCardsApi from "../../api/services/searchCards.service";

export const fetchSearchCards = createAsyncThunk(
  "searchCards/fetchSearchCards",
  async (_, { rejectWithValue }) => {
    try {
      const response = await searchCardsApi().getSearchCards();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getSearchCardById = createAsyncThunk(
  "searchCards/getSearchCardById",
  async (cardId, { rejectWithValue }) => {
    try {
      const response = await searchCardsApi().getSearchCardById(cardId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addSearchCard = createAsyncThunk(
  "searchCards/addSearchCard",
  async (newCard, { rejectWithValue }) => {
    try {
      const response = await searchCardsApi().addSearchCard(newCard);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateSearchCard = createAsyncThunk(
  "searchCards/updateSearchCard",
  async (updatedCard, { rejectWithValue }) => {
    try {
      const response = await searchCardsApi().updateSearchCard(updatedCard);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getFirstActiveSearchCards = createAsyncThunk(
  "searchCards/getFirstActiveSearchCards",
  async (_, { rejectWithValue }) => {
    try {
      const response = await searchCardsApi().getFirstActiveSearchCards();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
