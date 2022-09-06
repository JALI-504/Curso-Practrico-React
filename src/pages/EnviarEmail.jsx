import React from 'react';
import '../styles/EnviarEmail.scss';

const EnviarEmail = () => {
    return (
        <div className="login">
        <div className="contenedor-formulario">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>

            <h1 className="titulo">¡Hemos enviado un mensaje a tu correo electrónico!</h1>
            <p className="subtitulo">Por favor, revisa tu bandeja de entrada</p>

            <div className="email-imag">
                <img src="./icons/email.svg" alt="email"/>
            </div>

        </div>
        <button className="primary-button login-button">Login</button>

        <p className="reenviar">
            <span>¿No recibiste nuestro E-mail?</span>
            <a href="/">Reenviar</a>
        </p>
    </div>
    );
}

export default EnviarEmail;