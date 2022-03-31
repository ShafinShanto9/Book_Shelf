import { Container, AppBar, Grid, Grow, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPost } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './style.js'


const App = () => {

  const [currentId, setCurrentId] = useState(null)
  const clasess = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost())
  },[dispatch])

  return (
      <Container maxWidth="lg">
      <AppBar className={clasess.appBar} position='static' color='inherit'>
          <Typography className={clasess.heading} variant='h2' align='center'>BookShelf 📖</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container  justifyContent='space-between' alignItems='stretch' spacing={3} >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={ currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App