import { Button, Paper, TextField, Typography } from "@material-ui/core"
import React, { useState } from 'react'
import { useEffect } from "react"
import FileBased from 'react-file-base64'
import { useDispatch, useSelector } from "react-redux"
import { createPost,updatePost } from "../../actions/posts.js"
import useStyles from './style.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = ({currentId, setCurrentId}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    description: '',
    tags: '',
    selectedFiles: ''
  })

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null); //Fetching Data
  
  useEffect(() => {
    if (post) {
      setPostData(post)
    }   
  },[post])


  
  // Handle Form Data Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentId) {
      dispatch(updatePost(currentId, postData))

      toast.success("Update SuccessFully 😊", {
        position: toast.POSITION.TOP_CENTER
      });
      
    } else {
      dispatch(createPost(postData))

      toast.success("Post CreatedSuccessFully 😊", {
        position: toast.POSITION.TOP_CENTER
      });
    }
   
    setCurrentId(null)
      setPostData({
      creator: '',
      title: '',
      description: '',
      tags: '',
      selectedFiles: ''
      })
  }


  // reset form
  const clear = () => {
    setCurrentId(null)
      setPostData({
      creator: '',
      title: '',
      description: '',
      tags: '',
      selectedFiles: ''
      })
  }
  
  return (
    <Paper className={classes.paper} >
      <form className={`${classes.root} ${classes.form}`} autoComplete='of' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? "Editing" : "Publishing"} Your Books <br /> Digital Reference 📢 </Typography>
        
        <TextField name='creator' variant='outlined' label='Author' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator:e.target.value})}
        />
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title:e.target.value})}
        />
        <TextField name='description' variant='outlined' label='Description' fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description:e.target.value})}
        />
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags:e.target.value})}
        />

        <div className={classes.fileInput}>
          <FileBased
            type='file'
            multiple={false}
            onDone={({base64})=> setPostData({...postData, selectedFile: base64}) }
          />
        </div>

        <Button className={classes.buttonSubmit} variant="contained"  size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

      </form>

      <ToastContainer/>
    </Paper>
  )
}

export default Form