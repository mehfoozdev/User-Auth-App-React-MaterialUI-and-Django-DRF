import React, { useState } from 'react';
import {Grid, Card, Typography, Tabs, Tab, Box, Divider} from '@mui/material';
import Pic1 from '../../../images/shopping1.png'
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';

const TabPanel = (props) => {
    const {children, value, index} = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}


const LoginReg = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return <>
        <Grid container sx={{height:'90vh'}}>
            <Grid item lg={7} sm={5} sx={{
                backgroundImage : `url(${Pic1})`,
                backgroundRepeat : 'no-repeat',
                backgroundSize : 'cover',
                backgroundPosition : 'center',
                display : {xs:'none', sm:'block'}
            }}>
            </Grid>

            <Grid item lg={5} sm={12} >
                <Card sx={{width: '100%', height:'100%'}}>
                    <Box>
                        <Box sx={{borderBottom:1, borderColor:'divider'}}>
                            <Tabs value={value} textColor='secondary' indicatorColor='primary' onChange={handleChange}>
                                <Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                                <Tab label='Registration' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                            </Tabs>
                        </Box>

                        {/* Login Page */}
                        <TabPanel value={value} index={0}>
                            <UserLogin/>
                        </TabPanel>

                        {/* Registration page  */}
                        <TabPanel value={value} index={1}>
                            <UserRegistration/>
                        </TabPanel>

                    </Box>

                </Card>
            </Grid>

        </Grid>
    </>
}

export default LoginReg