import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/services/auth.service";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ login, password }, {}) => {
    try {
      const response = await authApi().loginUser(login, password);

      localStorage.setItem("authToken", response.data.access_token);
      const me = await authApi().getMe();
      localStorage.setItem("user", JSON.stringify(me.data));
      return { ...me.data, ...response.data };
    } catch (error) {
      console.error(error);
    }
  }
);
export const registerUser = createAsyncThunk(async (email, password) => {
  try {
    const response = await authApi.registerUser(email, password);
    console.log(response.data);
    return response.data;
  } catch (error) {}
});

export const getMe = createAsyncThunk("user/getMe", async () => {
  try {
    const response = await authApi.getMe();
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuth: false,
    error: null,
  },
  reducers: {
    logout() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state) => {
        console.log(state);
        state.user = {};
        state.isAuth = false;
        state.error = "";
      })
      .addCase(registerUser.fulfilled, (state) => {});
  },
});
export default userSlice.reducer;
export const { login, registration, logout } = userSlice.actions;
