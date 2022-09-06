import React from 'react';
import '../styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
    return (
        <div className="login">
        <div className="contenedor-formulario">
            <img src={logo} alt="logo" class="logo"/>
            <form action="/" class="formulario">
                <label for="email" class="label">Direccion de Email</label>
                <input type="text" id="email" placeholder="Ingrese su correo electrónico" class="input input-email"/>
                <label for="Contraseña" class="label">Contraseña</label>
                <input type="password" id="contraseña" placeholder="*********" class="input input-passw"/>               
                <input type="button" value="Login" class="primary-button login-button"/>
                <a href="/">¿No recuerdo mi contraseña?</a>
            </form>
            <button class="secundary-button signup-button">Sign Up</button>
        </div>
    </div>
    );
}

export default Login;