import React from 'react';
import "../styles/OrderItem.scss";

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import arrow from '@icons/flechita.svg';
import close from '@icons/icon_close.png';

const OrderItem = () => {
    return (
        <div className="OrderItem">
        <figure>
            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="bicicleta"/>
        </figure>
        <p>Bicicleta</p>
        <p>L. 1,500.00</p>
        <img src= {close} alt="close"/>
    </div>
    );
}

export default OrderItem;