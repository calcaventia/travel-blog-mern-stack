import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-mern-website-37aecf92ecf8.herokuapp.com/posts",
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = () => API.get("/posts/");
export const createPost = (newPost) => API.post("/posts/", newPost);
export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
