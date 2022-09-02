import React from 'react'
import '../styles/Newpass.scss'; 

const Login = () => {
    return (
        <div className="login">
        <div className="contenedor-formulario">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            <h1 className="titulo">Crea una nueva contraseña:</h1>
            <p className="subtitulo">Introduce una contrasela para tu cuenta</p>
            <form action="/" className="formulario">
                <label for="contraseña" className="label">Contraseña</label>
                <input type="password" id="contraseña" placeholder="*********" className="input input-passw"/>
                <label for="nueva-contraseña" className="label">Nueva Contraseña</label>
                <input type="password" id="nueva-contraseña" placeholder="*********" className="input input-passw"/>        
                <input type="button" value="Confirmar" className="primary-button login-button"/>
            </form>
        </div>
    </div>
    );
}

export default Login;