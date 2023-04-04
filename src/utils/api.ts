import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
