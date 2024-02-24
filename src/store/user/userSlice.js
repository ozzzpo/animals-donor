import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, changeMe } from "./actions";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user") || {
      first_name: "",
      second_name: "",
      patronymic: "",
      phone: "",
      city: "",
      is_email_public: true,
      id: 0,
      email: "",
      is_active: true,
      avatar: "",
      created_at: "",
      is_email_confirm: false,
    },
    isAuth: localStorage.getItem("authToken") || false,
    status: "ready",
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = {
        first_name: "",
        second_name: "",
        patronymic: "",
        phone: "",
        city: "",
        is_email_public: true,
        id: 0,
        email: "",
        is_active: true,
        avatar: "",
        created_at: "",
        is_email_confirm: false,
      };
      state.isAuth = false;
      state.error = null;
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.status = "ready";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = {};
        state.isAuth = false;
        state.error =
          action.payload && action.payload.detail
            ? action.payload.detail
            : "Произошла ошибка при авторизации";
        state.status = "rejected";
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "ready";
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(changeMe.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        localStorage.removeItem("user");
        localStorage.setItem("user", state.user);
      });
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
