import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './style.js'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const clasess = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    setUser(null)
  }

  useEffect(() => {
    const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])

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
              <Button className={clasess.logout} variant='contained' color='secondary' onClick={logout} > Sign Out</Button>
            </div>
          ): (
              <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default NavBar