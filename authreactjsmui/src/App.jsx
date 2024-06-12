import React, { useEffect } from 'react'
import Layout from './pages/Layout';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import LoginReg from './pages/auth/LoginReg';
import SendPassResetEmail from './pages/auth/SendPassResetEmail';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../src/features/authSlice'; 



function App() {
  // const access_token = useSelector((state) => state.auth.access_token);
  // console.log("Access Token: ", access_token); // Debugging line to check access_token

  // const state = useSelector((state) => state);
  // console.log("Redux State: ", state); // Log entire state for debugging

  // const access_token = state.auth ? state.auth.access_token : null;
  // console.log('Access Token: ', access_token); // Debugging line to check access_token

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserToken({ access_token: 'test-token' }));
  }, [dispatch]);

  const state = useSelector((state) => state);
  console.log("Redux State: ", state); // Log entire state for debugging

  const access_token = state.auth ? state.auth.access_token : null;
  console.log('Access Token: ', access_token); // Debugging line to check access_token


  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path='contact' element={<Contact />} />

                  <Route path='login' element={!access_token ? <LoginReg /> : <Navigate to='/dashboard' />} />
                  
                  <Route path='send-password-reset-email' element={<SendPassResetEmail />} />
                  <Route path='reset-password' element={<ResetPassword />} />
                </Route>
                <Route path='/dashboard' element={access_token ? <Dashboard/> : <Navigate to='/login'/> }/> 
                <Route path="*" element={<h1> Error 404 Page not found ! </h1>} />
            </Routes>
        </BrowserRouter>

        {/* <h1>React Learning ehre</h1> */}
    </>
  );
}

export default App;
