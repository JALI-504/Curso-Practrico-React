import React from 'react';
import "@styles/OrderItem.scss";

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