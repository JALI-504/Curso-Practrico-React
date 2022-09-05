import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import Newpass from "../containers/Newpass";
import Home from '../pages/Home';
import RecuperarPass from '../pages/RecuperarPass';
import EnviarEmail from '../pages/EnviarEmail';
import MiCuenta from '../pages/MiCuenta';
import CrearCuenta from '../pages/CrearCuenta';
import Checkout from '../pages/Checkout';
import Order from '../pages/Order';
import NotFound from '../pages/NotFound'


import '../styles/global.css';


 const App  = () => {
     return (
        <BrowserRouter>
        <Layout>
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/newpass" element={<Newpass/>} />
            <Route exact path="/enciaremail" component={EnviarEmail} />
            <Route exact path="/recuperarpass" component={RecuperarPass} />
            <Route exact path="/micuenta" component={MiCuenta} />
            <Route exact path="/crearcuenta" component={CrearCuenta} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/order" component={Order} />
            <Route path="*" element={<NotFound/>} />         
            </Routes>   
        </Layout>
        </BrowserRouter>

     );
 }

export default App;