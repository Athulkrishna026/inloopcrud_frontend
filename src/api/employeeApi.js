import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api/employees",
  baseURL: "https://inloopcrud-backend.onrender.com",
});

export default API;