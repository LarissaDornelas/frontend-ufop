import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-ufop.herokuapp.com",
  timeout: 3000
});
