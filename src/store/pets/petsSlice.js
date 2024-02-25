import { createSlice } from "@reduxjs/toolkit";
import { addPet, fetchPets, getPetById, getTypes, updatePet } from "./actions";
const petsSlice = createSlice({
  name: "pets",
  initialState: {
    types: [],
    pets: [],
    status: "ready",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.status = "ready";
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(getPetById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPetById.fulfilled, (state, action) => {
        state.status = "ready";
        state.currentPet = action.payload;
      })
      .addCase(addPet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.pets.push(action.payload);
      })
      .addCase(addPet.rejected, (state) => {})
      .addCase(getTypes.fulfilled, (state, action) => {
        state.types = action.payload;
      });
  },
});

export default petsSlice.reducer;
