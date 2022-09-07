import React, { useState} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}
    return (
        <nav>
        <img src={menu} alt="menu" className="menu"/>
        <div className="navbar-left">
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

        <div className="navbar-right">
            <ul>
                <li className="navbar-shopping-cart" onClick={handleToggle}>
                    ejemplo@ejemplo.com
                </li>
                <li className="navbar-shopping-cart">
                    <img src={shoppingCart} alt="shop-card"/>
                <div>2</div>
                </li>
            </ul>
        </div>
        {toggle && <Menu />}
    </nav>
    );
}
export default Header;