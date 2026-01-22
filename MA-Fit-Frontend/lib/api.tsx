import axios from "axios";

const api = axios.create({
  baseURL: "https://mafit.pepijntw.com/api",
  headers: {
    Accept: "application/json",
  },
});

export default api;
