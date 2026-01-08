import axios from "axios";

const BaseService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_MICROSERVICE_URL,
  headers: {
    "Content-Type": "application/json",
    timeout: 60000,
  },
});

BaseService.interceptors.request.use(
  (config) => {
    const tokenString = localStorage.getItem("token");
    const token = tokenString ? JSON.parse(tokenString) : null;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default BaseService;
