import axios from "axios";

const url = "http://localhost:5000/posts"

// Fetching post data API
export const fetchPosts = () => axios.get(url);
// Create Post API
export const createPost = (newPost) => axios.post(url, newPost)
// Update Post API
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
// Delete Post Api
export const deletePost = (id) => axios.delete(`${url}/${id}`)