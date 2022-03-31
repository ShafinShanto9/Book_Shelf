import { Button, Paper, TextField, Typography } from "@material-ui/core"
import React, { useState } from 'react'
import FileBased from 'react-file-base64'
import { useDispatch } from "react-redux"
import { createPost } from "../../actions/posts.js"
import useStyles from './style.js'


const Form = () => {
  const classes = useStyles()

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    description: '',
    tags: '',
    selectedFiles: ''
  })

  const dispatch = useDispatch()

  // Handle Form Data Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData))
  }
  // reset form

  const clear = () => {

  }
  
  return (
    <Paper className={classes.paper} >
      <form className={`${classes.root} ${classes.form}`} autoComplete='of' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>Publish Your Books <br /> Digital Copy 📢 </Typography>
        
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
    </Paper>
  )
}

export default Form