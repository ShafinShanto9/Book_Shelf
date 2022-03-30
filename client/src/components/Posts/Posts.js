import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './style.js'

const Posts = () => {
    const clasess = useStyles()
    const posts = useSelector((state) => state.posts)
    console.log(posts)
  return (
      <>
          <h1>Posts</h1>
          <Post/>
          <Post/>
      </>
  )
}

export default Posts