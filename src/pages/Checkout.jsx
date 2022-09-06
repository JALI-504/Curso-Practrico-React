import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Checkout.scss';

const Checkout = () => {
    return (
        <div className="my-order">
        <div className="my-order-container">

            <h1 className="titulo">Mi Orden</h1>
           
            <div className="my-order-content">
                <div className="order">
                    <p>
                        <span>11/05/2022</span>
                        <span>6 articulos</span>
                    </p>
                    <p>L. 9,000.00</p>
                </div>
            </div> 
            <OrderItem />      
        </div>
    </div>
    );
}

export default Checkout;