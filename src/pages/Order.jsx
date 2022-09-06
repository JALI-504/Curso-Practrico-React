import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Order.scss';

const Order = () => {
    return (
        <div class="my-order">
            <div class="my-order-container">

                <h1 class="titulo">Mi Orden</h1>
            
                <div class="my-order-content">
                    <OrderItem />
                </div>       
            </div>
        </div>
    );
}

export default Order;