import axios from "axios";
import { SERVER_URL } from "../constants";

// Create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: SERVER_URL,
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from local storage
    const token = localStorage.getItem("accessToken");

    // Add token to request headers if it exists
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
