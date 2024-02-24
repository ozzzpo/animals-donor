import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/services/auth.service";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await authApi().loginUser(login, password);

      localStorage.setItem("authToken", response.data.access_token);
      const me = await authApi().getMe();
      localStorage.setItem("user", JSON.stringify(me.data));
      return { ...me.data, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ email, password }, {}) => {
    try {
      const response = await authApi().registerUser(email, password);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async () => {
  try {
    const response = await authApi().getMe();
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const changeMe = createAsyncThunk(
  "user/changeMe",
  async ({ firstName, lastName }, {}) => {
    try {
      const response = await authApi().changeMe(firstName, lastName);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
