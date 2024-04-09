import axios from "axios";
import { SERVER_URL } from "../constants";

// Creating Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: SERVER_URL,
});

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    // Adding token to request headers if it exists
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
