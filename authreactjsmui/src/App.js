import React from 'react'
import Layout from './components/pages/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import LoginReg from './components/pages/auth/LoginReg';
import SendPassResetEmail from './components/pages/auth/SendPassResetEmail';
import ResetPassword from './components/pages/auth/ResetPassword';
import Dashboard from './components/pages/Dashboard';



function App() {
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path='contact' element={<Contact />} />
                  <Route path='login' element={<LoginReg />} />
                  <Route path='send-password-reset-email' element={<SendPassResetEmail />} />
                  <Route path='reset-password' element={<ResetPassword />} />
                </Route>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path="*" element={<h1> Error 404 Page not found ! </h1>} />
            </Routes>
        </BrowserRouter>

        {/* <h1>React Learning ehre</h1> */}
    </>
  );
}

export default App;
