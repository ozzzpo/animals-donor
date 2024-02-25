import { createAsyncThunk } from "@reduxjs/toolkit";
import petsApi from "../../api/services/pets.service";

export const fetchPets = createAsyncThunk("pets/fetchPets", async () => {
  try {
    const response = await petsApi().getMyPets();
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});
export const getPetById = createAsyncThunk(
  "pets/getPetById",
  async (petId, { rejectWithValue }) => {
    try {
      const response = await petsApi().getPetById(petId);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updatePet = createAsyncThunk(
  "pets/updatePet",
  async ({ petId, pet }, { rejectWithValue }) => {
    try {
      const response = await petsApi().updatePet(petId, pet);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addPet = createAsyncThunk(
  "pets/addPet",
  async (newPet, { rejectWithValue }) => {
    try {
      console.log(newPet);
      const response = await petsApi().addPet(newPet);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getTypes = createAsyncThunk(
  "pets/getTypes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await petsApi().getTypes();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const matchDonors = createAsyncThunk(
  "pets/matchDonors",
  async (searchCardId, { rejectWithValue }) => {
    try {
      const response = await petsApi().matchDonors(searchCardId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const matchRecipients = createAsyncThunk(
  "pets/matchRecipients",
  async (petId, { rejectWithValue }) => {
    try {
      const response = await petsApi().matchRecipients(petId);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
