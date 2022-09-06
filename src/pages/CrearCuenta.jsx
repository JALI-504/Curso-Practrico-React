import React from 'react';
import '../styles/CrearCuenta.scss';

const CrearCuenta = () => {
    return (
        <div className="login">
        <div className="contenedor-formulario">
          
            <h1 className="titulo">Mi Cuenta:</h1>

            <form action="/" className="formulario">
                
                <div >
                    <label for="nombre" className="label">Nombre: </label>
                <input type="text" id="nombre" placeholder="Escriba su nombre." className="input input-nombre"/>

                <label for="email" className="label">Email: </label>
                 <input type="text" id="email" placeholder="Escriba su correo electronico." className="input input-email"/>
                 <label for="contraseña" className="label">Contraseña: </label>
                 <input type="password" id="contraseña" placeholder="Escriba su contraseña." className="input input-passw"/>
                </div>
                
                <input type="submit" value="Crear" className="primary-button login-button"/>
            </form>
        </div>
    </div>
    );
}

export default CrearCuenta;