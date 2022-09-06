import React from 'react';
import "../styles/OrderItem.scss";

const OrderItem = () => {
    return (
        <div className="shop-card">
        <figure>
            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="bicicleta"/>
        </figure>
        <p>Bicicleta</p>
        <p>L. 1,500.00</p>
        <img src="./icons/icon_close.png" alt="close"/>
    </div>
    );
}

export default OrderItem;