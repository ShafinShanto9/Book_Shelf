import { Button, Paper, TextField, Typography } from "@material-ui/core"
import React, { useState } from 'react'
import FileBased from 'react-file-base64'
import useStyles from './style.js'


const Form = () => {
  const clasess = useStyles()

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    description: '',
    tags: '',
    selectedFiles: ''
  })

  console.log(postData)

  // Handle Form Data Submission
  const handleSubmit = () => {
    
  }
  // reset form

  const clear = () => {

  }
  
  return (
    <Paper className={clasess.paper} >
      <form className={clasess.form} autoComplete='of' noValidate onSubmit={handleSubmit}>
        <Typography variant='h6'>Publish You Books <br /> Digital Copy 📢 </Typography>
        
        <TextField name='creator' variant='outlined' label='Author' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator:e.target.value})}
        />
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title:e.target.value})}
        />
        <TextField name='description' variant='outlined' label='Description' fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description:e.target.value})}
        />
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags:e.target.value})}
        />

        <div className={clasess.fileInput}>
          <FileBased
            type='file'
            multiple={false}
            onDone={({base64})=> setPostData({...postData, selectedFiles: base64}) }
          />
        </div>

        <Button className={clasess.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

      </form>
    </Paper>
  )
}

export default Form