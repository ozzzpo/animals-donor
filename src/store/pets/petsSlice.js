import { createSlice } from "@reduxjs/toolkit";
import { addPet, fetchPets, getPetById, updatePet } from "./actions";
const petsSlice = createSlice({
  name: "pets",
  initialState: {
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
      .addCase(getPetById.pending, (state, action) => {})
      .addCase(getPetById.fulfilled, (state, action) => {})
      .addCase(getPetById.rejected, (state, action) => {})
      .addCase(updatePet.pending, (state, action) => {})
      .addCase(updatePet.fulfilled, (state, action) => {})
      .addCase(updatePet.rejected, (state, action) => {})
      .addCase(addPet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.pets.push(action.payload);
      })
      .addCase(addPet.rejected, (state, action) => {});
  },
});

export default petsSlice.reducer;
