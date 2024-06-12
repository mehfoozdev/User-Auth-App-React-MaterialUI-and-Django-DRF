import React from 'react'
import { Button, CssBaseline, Typography, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';
import { removeToken } from '../services/LocalStorageService';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        // console.log('Logout Clicked')
        removeToken()
        navigate('/login')
    }

    return <> 
        <CssBaseline />

        <Grid container>
            <Grid item sm={5} sx={{backgroundColor:'gray', p:5, color:'white'}} alignContent='center'  textAlign='center'>
                <h2 variant='h1'>Dashboard</h2>
                <hr />
                <Typography variant='h4'>Name: Mehfooz Ali</Typography>
                <Typography variant='h6'>Email: mehfooz@gmail.com</Typography>
                <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt:8}}>Logout</Button>

            </Grid>

            <Grid item sm={7} >
                <ChangePassword/>
            </Grid>

        </Grid>

    </>;
}

export default Dashboard