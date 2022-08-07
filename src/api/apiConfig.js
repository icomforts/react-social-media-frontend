import axios from "axios";

const apiConfig = {
  baseUrl: "http://localhost:5050/",
};
const api = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("user")
      ? `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
      : "",
  },
});

api.interceptors.request.use(async (config) => await config);

api.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default api;
