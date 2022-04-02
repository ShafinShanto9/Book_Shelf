import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './style.js'

const NavBar = () => {
  const clasess = useStyles()
  const user = null
  return (
    <AppBar className={clasess.appBar} position='static' color='inherit'>
      <div className={clasess.brandContainer} >
          <Typography component={Link} to='/' className={clasess.heading} variant='h2' align='center'>BookShelf 📖</Typography>    
      </div>
      <Toolbar className={clasess.toolbar} >
        {
          user ? (
            <div className={clasess.profile}>
              <Avatar className={clasess.red} alt={user.result.name} src={user.result.imageUrl} >
                { user.result.name.charAt(0) }
              </Avatar>  
              <Typography className={clasess.userName} variant='h6' > {user.result.name} </Typography>
              <Button className={clasess.logout} variant='contained' color='secondary' > SignOut</Button>
            </div>
          ): (
              <Button component={Link} to='/auth' variant='contained' color='primary'>SignIn</Button>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default NavBar