import axios from "axios";

export const API = axios.create({
  baseURL: "http://52.79.233.106:8000/",

  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export default API;