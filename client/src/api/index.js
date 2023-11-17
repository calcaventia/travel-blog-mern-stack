import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = () => API.get("/posts/");
export const createPost = (newPost) => API.post("/posts/", newPost);
export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
