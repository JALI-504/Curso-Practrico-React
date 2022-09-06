import React from 'react';
import '../styles/Order.scss';

const Order = () => {
    return (
        <div className="order">
        <p>
            <span>11/05/2022</span>
            <span>6 articulos</span>
        </p>
        <p>L. 9,000.00</p>
        <img src="./icons/flechita.svg" alt="arrow"/>
    </div>
    );
}

export default Order;