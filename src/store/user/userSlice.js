import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, changeMe } from "./actions";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
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
    isAuth: false,
    status: "ready",
    error: null,
  },
  reducers: {
    logout() {},
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
      .addCase(loginUser.rejected, (state) => {
        state.user = {};
        state.isAuth = false;
        state.error = "Неверный логин или пароль";
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
        state.error = "Что-то пошло не так";
      })
      .addCase(changeMe.fulfilled, (state, action) => {
        state.user.first_name = action.payload["firstName"];
        state.user.second_name = action.payload["lastName"];
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(state.user));
      });
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
