import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
const initialState = {
  firstName: '', lastName:'', email: '', password:'', confirmPassword:''}

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)

  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log(formData);
  }

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value })
    
    if (isSignup) {
      dispatch(signup(formData, navigate))
    } else {
      dispatch(signin(formData, navigate))
      
    }

  }

  const handleShowPassword = () => setShowPassword(!showPassword);

   const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };  

  const googleSuccess = async(res) => {
    toast.success("Login SuccessFully 😊", {
      position: toast.POSITION.TOP_CENTER,
    });

    const result = res?.profileObj;
    const token = res?.tokenId

    try {

      dispatch({ type: 'AUTH', data: { result, token } })
      navigate('/')

    } catch (error) {
      
      console.log(error);
    }

  }
  const googleFailure = () => {
    console.log("Google Sign In Fail");
  }
  return (
    <Container component='main' maxWidth='xs'>
      <ToastContainer/>
        <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        
        <form className={classes.formContainer} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="294846612461-ni3jr83lvlqqv8s6l26tv36sn8edtr20.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'
                color='primary'
              >
                Google Sign In
              </Button>
            )}
            onSuccess = { googleSuccess }
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
            <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
          </Paper>
    </Container>
  )
}

export default Auth