import { useState } from 'react'
import { Grid, TextField, Button, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
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
            password: data.get('password'),
            password2: data.get('password2'),
        }
        if (actualData.password && actualData.password2){
            if(actualData.password === actualData.password2){
                document.getElementById('reset-password').reset();
            setError({status:true, msg:'Password Reset Successfull', type:'success'})
            navigate('/dashboard')
            }else{
            document.getElementById('reset-password').reset();
            console.log('data: ', actualData);
            setError({status:true, msg:'Password not matched.', type:'error'})
            }
          
    
        }else{
          setError({status:true, msg:'All fields are required !', type:'error'})
          
        }
      }
     
      
    
      return <>
    
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={12}>
                <Box component='form' noValidate sx={{mt:3, p:2}} id='reset-password' onSubmit={handleSubmit}>
                <h2>Update Password </h2>
            
                <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='password' />
                <TextField margin='normal' required fullWidth id='password2' name='password2' label='New Confirm Password' type='password' />
            
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Send</Button>
                </Box>
                
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
            
                </Box>
            </Grid>
        </Grid>
    
      </>
}

export default ResetPassword