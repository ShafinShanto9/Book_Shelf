import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts.js';
import useStyles from './style.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = ({post, setCurrentId}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const notify = () => toast('Post Delete Successfully!', {
  position: "top-left",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });

  return (
    <Card className={classes.card} >
      <CardMedia className= {classes.media} image={post.selectedFile} />
      <div className={classes.overlay} >
        <Typography variant="h6" > {post.creator} </Typography>
        <Typography variant="body2" > {moment(post.createdAt).fromNow()} </Typography>
      </div>
      <div className={classes.overlay2} >
        <Button style={{ color: 'white' }} size="small" onClick={() =>setCurrentId(post._id)} >
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>
      <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" > {post.tags.map((tag)=> `#${tag} ` )} </Typography>
      </div>
      <CardContent>

        <Typography className={classes.title} variant="subtitle1" gutterBottom >
          {(post.title)}
        </Typography>

        <Typography className={classes.desc} variant="subtitle1" gutterBottom >
          {(post.description).slice(0,80)}
        </Typography>
        
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=>{}} >
          <ThumbUpAltIcon fontSize='small' />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={()=> (dispatch(deletePost(post._id)), notify())} >
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
      </Card>
  )
}

export default Post