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
        grant_type: "",
        scope: "",
        client_id: "",
        client_secret: "",
      };
      return apiClient.post("auth/register", qs.stringify(data), {
        headers: {
          "Content-Type": "application/`x-www-form-urlencoded",
        },
      });
    },
    getMe: () => {
      return apiClient.get("users/me");
    },
  };
};
export default authApi;
