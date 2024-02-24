import { createSlice } from "@reduxjs/toolkit";
import { addPet, fetchPets, getPetById, updatePet } from "./actions";
const petsSlice = createSlice({
  name: "pets",
  initialState: {
    pets: [],
    status: "ready",
    error: null,
  },
  reducers: {
    logout() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state, action) => {})
      .addCase(fetchPets.fulfilled, (state, action) => {})
      .addCase(fetchPets.rejected, (state, action) => {})
      .addCase(getPetById.pending, (state, action) => {})
      .addCase(getPetById.fulfilled, (state, action) => {})
      .addCase(getPetById.rejected, (state, action) => {})
      .addCase(updatePet.pending, (state, action) => {})
      .addCase(updatePet.fulfilled, (state, action) => {})
      .addCase(updatePet.rejected, (state, action) => {})
      .addCase(addPet.pending, (state, action) => {})
      .addCase(addPet.fulfilled, (state, action) => {})
      .addCase(addPet.rejected, (state, action) => {});
  },
});

export default petsSlice.reducer;
export const { logout } = petsSlice.actions;
