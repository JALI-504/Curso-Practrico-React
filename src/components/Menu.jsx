import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
    return (
        <div className="menu-escritorio">
        <ul>
            <li>
                <a href="/" className="titulo">Mis Ordenes</a>
            </li>
            <li>
                <a href="/" className="titulo">Mi Cuenta</a>
            </li>
            <li>
                <a href="/" className="titulo">Sign Out</a>
            </li>
        </ul>
    </div>        
    );
}

export default Menu;