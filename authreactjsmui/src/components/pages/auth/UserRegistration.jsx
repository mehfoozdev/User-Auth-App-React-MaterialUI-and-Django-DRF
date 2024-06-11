import React, { act, useState } from 'react'
import { TextField, Button, Box, Alert } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom';


const UserRegistration = () => {

  const [error, setError] = useState({
    status: false,
    msg : '',
    type : '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email:data.get('email'),
      password: data.get('password')
    }
    // console.log('data: ', actualData);
    if (actualData.email && actualData.password){
      document.getElementById('login-form').reset();
      // console.log('data: ', actualData);
      setError({status:true, msg:'Login Success', type:'success'})
      navigate('/')

    }else{
      // console.log('All fields are required !')
      setError({status:true, msg:'All fields are required !', type:'error'})
      
    }
  }

  

  return <>

    <Box component='form' noValidate sx={{mt:3, p:2}} id='login-form' onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />

      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Sign In</Button>
      </Box>

      {/* <NavLink to='/login'>Already have an account ? </NavLink> */}

      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}


    </Box>

  </>
}

export default UserRegistration