import axios from "axios";

const url = "http://localhost:5000/posts"

// Fetching post data
export const fetchPosts = () => axios.get(url);
// Create Post 
export const createPost = (newPost) => axios.post(url, newPost)