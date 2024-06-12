import React, { useState } from 'react'
import { TextField, Button, Box, FormControlLabel, Checkbox, Typography, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi'


const UserRegistration = () => {
  const navigate = useNavigate();
  const [server_error, setServerError] = useState({})

  const [registerUser, { isLoading }] = useRegisterUserMutation()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name:data.get('name'),
      email:data.get('email'),
      password: data.get('password'),
      password2: data.get('password2'),
      tc: data.get('tc')
    }
    const res = await registerUser(actualData)
    if(res.error){
      console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if(res.data){
      console.log(res.data) 
      navigate('/login')
    }
  }


  return <>

    <Box component='form' noValidate sx={{mt:3, p:2}} id='registration-form' onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <TextField margin='normal' required fullWidth id='name' name='name' label='Full Name' />
      {server_error.name ? <Typography style={{fontSize:14, color:'red', paddingLeft:10}}>{server_error.name[0]}</Typography> : "" }

      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{fontSize:14, color:'red', paddingLeft:10}}>{server_error.email[0]}</Typography> : "" }

      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{fontSize:14, color:'red', paddingLeft:10}}>{server_error.password[0]}</Typography> : "" }

      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      {server_error.password2 ? <Typography style={{fontSize:14, color:'red', paddingLeft:10}}>{server_error.password2[0]}</Typography> : "" }

      <FormControlLabel control={<Checkbox value={true} color='primary' name='tc' id='tc'/>} label="I agreed to term and condition." />
      {server_error.tc ? <span style={{fontSize:14, color:'red', paddingLeft:10}}>{server_error.tc[0]}</span> : "" }

      {/* Non Field Errors */}
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : "" }

      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Sign Up</Button>
      </Box>

    </Box>

  </>
}

export default UserRegistration