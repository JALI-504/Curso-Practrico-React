import React from 'react';
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    return (
        <nav>
        <img src={menu} alt="menu" className="menu"/>
        <div className="nav-left">
            <img src={logo} alt="logo" className="nav-logo"/>

            <ul>
                <li>
                    <a href="/">TODO</a>
                </li>
                <li>
                    <a href="/">ROPA</a>
                </li>
                <li>
                    <a href="/">ELECTÓNICA</a>
                </li>
                <li>
                    <a href="/">MUEBLES</a>
                </li>
                <li>
                    <a href="/">JUGUETES</a>
                </li>
                <li>
                    <a href="/">OTROS</a>
                </li>
            </ul>
        </div>

        <div className="nav-right">
            <ul>
                <li className="nav-email">ejemplo@ejemplo.com</li>
                <li className="nav-shop-card">
                    <img src={shoppingCart} alt="shop-card"/>
                <div>2</div>
                </li>
            </ul>
        </div>

    </nav>
    );
}

export default Header;