import axios from "axios";

const API = import.meta.env.VITE_API_URL || "/api";

export const getPosts = async () => {
  const res = await axios.get(`${API}/posts`);
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axios.get(`${API}/posts/${id}`);
  return res.data;
};

export const createPost = async (postData) => {
  const res = await axios.post(`${API}/posts`, postData);
  return res.data;
};
