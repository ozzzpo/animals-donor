import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const changeMe = createAsyncThunk(
  "user/changeMe",
  async ({ firstName, lastName }, {}) => {
    try {
      const response = await authApi.changeMe(firstName, lastName);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
