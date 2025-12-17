import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api`;

/* =======================
   OPEN API (NO AUTH)
   ======================= */
export const openApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/* =======================
   AUTH API
   ======================= */
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/* -------- Request Interceptor (Attach Token) -------- */
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* -------- Response Interceptor (Global Errors) -------- */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized request");

      // Optional:
      // localStorage.removeItem("accessToken");
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
