import React from 'react'
import Post from './Post/Post'
import useStyles from './style.js'
const Posts = () => {
    const clasess = useStyles()
  return (
      <>
          <h1>Posts</h1>
          <Post/>
          <Post/>
      </>
  )
}

export default Posts