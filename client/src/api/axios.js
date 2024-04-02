import axios from "axios";
import { SERVER_URL } from "../constants";

// Create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: SERVER_URL,
});
export default axiosInstance;
