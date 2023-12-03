import axios from "axios";

export const API = axios.create({
  baseURL: "https://ecoback.r-e.kr",

  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export default API;

