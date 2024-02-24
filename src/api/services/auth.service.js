import apiClient from "../instance";

const qs = require("qs");
const authApi = () => {
  return {
    loginUser: (username, password) => {
      const data = {
        username,
        password,
        grant_type: "",
        scope: "",
        client_id: "",
        client_secret: "",
      };
      return apiClient.post("auth/login", qs.stringify(data), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    },
    registerUser: (email, password) => {
      const data = {
        email,
        password,
      };
      return apiClient.post("auth/register", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    },
    getMe: () => {
      return apiClient.get("users/me");
    },
    changeMe: (firstName, lastName) => {
      const data = {
        firstName,
        lastName,
      };
      return apiClient.patch("users/me", qs.stringify(data));
    },
  };
};
export default authApi;
