import mongoose from "mongoose"
import PostMessage from "../models/postMessage.js"

// get post from database
export const getPost = async(req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({messge:error.messge})
    }
}

// post saved on database
export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({messge:error.messge})
    }
}
// Updating existing post

export const updatePost = async (req, res) => {

    const { id: _id } = req.params
    const post = req.body
    
    // Checking Id Valid or not 
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Invalid Post Id");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true })
    
    res.json(updatedPost)
}

// Delete Post

export const deletePost = async (req, res) => {

    const {id} = req.params

    // Checking Id Valid or not 
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid Post Id");

    await PostMessage.findByIdAndRemove(id)

    res.json({message: "Post Deleted Successfully"})

}

// Like post count update

export const likePost = async (req, res) => {
    const { id } = req.params

    if(!req.userId) return res.json({message: "Unauthenticated"})
    
    // Checking Id Valid or not 
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("Invalid Post Id");

    const post = await PostMessage.findById(id)

    const index = post.likes.findIndex((id) => id === String(req.userId))

    if (index === -1) {
        post.likes.push(req.userId)
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId))
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new:true } )

    res.json(updatedPost)
}