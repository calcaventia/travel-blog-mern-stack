import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-mern-website-37aecf92ecf8.herokuapp.com/posts",
});

export const fetchPost = (id) => axios.get(`${url}/${id}`);
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const comment = (value, id) =>
  axios.post(`${url}/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
