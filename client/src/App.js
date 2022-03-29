import { Container, AppBar, Grid, Grow, Typography } from '@material-ui/core';
import React from 'react';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './style.js'
const App = () => {
  const clasess = useStyles()
  return (
      <Container maxWidth="lg">
      <AppBar className={clasess.appBar} position='static' color='inherit'>
          <Typography className={clasess.heading} variant='h2' align='center'>BookShelf 📖</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container  justifyContent='space-between' alignItems='stretch' spacing={3} >
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form/>
              </Grid>
            </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App