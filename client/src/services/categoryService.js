import axios from "axios";

const API = import.meta.env.VITE_API_URL || "/api";

export const getCategories = async () => {
  const res = await axios.get(`${API}/categories`);
  return res.data;
};
