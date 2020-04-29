import axios from "axios";

export const api = axios.create({
  baseURL: "https://theclosecompany.com/",
  withCredentials: true
});
