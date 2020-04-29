import axios from "axios";

export const api = axios.create({
  baseURL: "https://appserver.theclosecompany.com/",
  withCredentials: true
});
