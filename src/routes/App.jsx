import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecuperarPass from '../pages/RecuperarPass';
import EnviarEmail from '../pages/EnviarEmail';
import NewPass from '../pages/NewPass';
import MiCuenta from "../pages/MiCuenta";
import CrearCuenta from "../pages/CrearCuenta";
import Checkout from '../pages/Checkout';
import Order from '../pages/Order';
import NotFound from '../pages/NotFound';

import '../styles/global.css';
import ProductItem from "../components/ProductItem";





 const App  = () => {
     return (
        <BrowserRouter>
        <Layout>
            <Routes>
            <Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/recuperarpass" element={<RecuperarPass />} />
					<Route exact path="/enviaremail" element={<EnviarEmail />} />
					<Route exact path="/newpass" element={<NewPass />} />
					<Route exact path="/micuenta" element={<MiCuenta />} />
					<Route exact path="/crearcuenta" element={<CrearCuenta />} />
					<Route exact path="/checkout" element={<Checkout />} />
					<Route exact path="/order" element={<Order />} />
                    <Route exact path="/productitem" element={<ProductItem />} />
					<Route path="*" element={<NotFound />} />      
            </Routes>   
        </Layout>
        </BrowserRouter>

     );
 }

export default App;