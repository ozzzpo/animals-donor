import axios from "axios";

const API_BASE_URL = "http://89.223.30.75/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error.message);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  }
  // (error) => {
  //   if (error.response.status === 401) {
  //     localStorage.removeItem("authToken");
  //     localStorage.removeItem("user");
  //     console.log("unauth");
  //   }
  //   console.log(error.message);
  // }
);
export default apiClient;
