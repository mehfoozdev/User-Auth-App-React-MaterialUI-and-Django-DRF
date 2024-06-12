import React, { act, useState } from 'react'
import { TextField, Button, Box, Alert, FormControlLabel, Checkbox } from '@mui/material'
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
      name:data.get('name'),
      email:data.get('email'),
      password: data.get('password'),
      password2: data.get('password2'),
      tc: data.get('tc')
    }
    if (actualData.name && actualData.email && actualData.password && actualData.password2 && actualData.tc !== null){
      if(actualData.password === actualData.password2){
        document.getElementById('registration-form').reset();
        console.log('data: ', actualData);
        setError({status:true, msg:'Registration Successful', type:'success'})
        navigate('/login')
      }else{
        document.getElementById('registration-form').reset();
        console.log('data: ', actualData);
        setError({status:true, msg:'Password not matched.', type:'error'})
      }
      
    }else{
      setError({status:true, msg:'All fields are required !', type:'error'})
      
    }
  }


  return <>

    <Box component='form' noValidate sx={{mt:3, p:2}} id='registration-form' onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <TextField margin='normal' required fullWidth id='name' name='name' label='Full Name' />
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />

      <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc' id='tc'/>} label="I agreed to term and condition." />

      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Sign Up</Button>
      </Box>

      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}


    </Box>

  </>
}

export default UserRegistration