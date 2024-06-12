import React, { useState, useEffect } from 'react'
import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../services/userAuthApi'
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../features/authSlice';


const UserLogin = () => {
  const navigate = useNavigate();
  const [server_error, setServerError] = useState({});
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();


  const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email:data.get('email'),
      password: data.get('password')
    }
    // document.getElementById('reset-password').reset();
    const res = await loginUser(actualData)
    if(res.error){
      setServerError(res.error.data.errors)
    }

    if(res.data){
      storeToken(res.data.token)
      let { access_token } = getToken()
      dispatch(setUserToken({access_token:access_token}))
      navigate('/dashboard')
    }
  }

  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({access_token:access_token}))
  }, [access_token, dispatch] )

  return <>

    <Box component='form' noValidate sx={{mt:3, p:2}} id='login-form' onSubmit={handleSubmit}>
      <h2>User Login</h2>

      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{fontSize:14, color:'red', paddingLeft:10}}>{server_error.email[0]}</Typography> : "" }

      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{fontSize:14, color:'red', paddingLeft:10}}>{server_error.password[0]}</Typography> : "" }


      {/* Non Field Errors */}
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : "" }

      <Box textAlign='center'>
        {isLoading ? <CircularProgress/> : <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Sign In</Button>}
      </Box>

      <NavLink to='/send-password-reset-email' >Forgot Password ? </NavLink>

    </Box>

  </>
}

export default UserLogin