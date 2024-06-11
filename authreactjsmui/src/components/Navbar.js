import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Grid} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <>
        <Grid>
            <Box sx={{flexGrow:1}}>
                <AppBar position='static' color='secondary'>    
                    <Toolbar>
                        <Typography variant='h5' component='div' sx={{flexGrow:1}}>
                            Mehran Technologies
                        </Typography>

                        <Button component={NavLink} to='/' sx={{color:'white', textTransform:'none'}} style={({isActive})=>{
                            return {backgroundColor: isActive ? '#6d1b7b' : ''}
                        }}> Home </Button>
                        <Button component={NavLink} to='/contact' sx={{color:'white', textTransform:'none'}} style={({isActive})=>{
                            return {backgroundColor: isActive ? '#6d1b7b' : ''}
                        }}> Contact </Button>

                        {/* Auth Login */}
                        <Button component={NavLink} to='/login' sx={{color:'white', textTransform:'none'}} style={({isActive})=>{
                            return {backgroundColor: isActive ? '#6d1b7b' : ''}
                        }}> Login </Button>

                    </Toolbar>
                </AppBar>
            </Box>
        </Grid>
    </>
};

export default Navbar;