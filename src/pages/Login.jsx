import React from 'react';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
    return (
        <div className="Login">
        <div className="Login-container">
            <img src={logo} alt="logo" className="logo"/>
            <form action="/" className="form">
                <label for="email" className="label">Direccion de Email</label>
                <input type="text" id="email" placeholder="Ingrese su correo electrónico" class="input input-email"/>
                <label for="Contraseña" className="label">Contraseña</label>
                <input type="password" id="password" placeholder="*********" class="input input-passw"/>               
                <input type="button" value="Login" className="primary-button Login-button"/>
                <a href="/">¿No recuerdo mi contraseña?</a>
            </form>
            <button className="secundary-button signup-button">Sign Up</button>
        </div>
    </div>
    );
}

export default Login;