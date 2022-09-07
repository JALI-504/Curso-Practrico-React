import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';


import arrow from '@icons/flechita.svg';
import addCart from '@icons/bt_add_to_cart.svg';

const MyOrder = () => {
    return (
        <aside className="MyOrder">
        <div className="title-container">
            <img src={arrow} alt="flechita"/>
            <p className="title">Mi Orden</p>
        </div>
    
        <div className="my-order-content">  
        <OrderItem />
                <div className="order">
                    <p>
                        <span>TOTAL</span>
                    </p>
                    <p>L. 9,000.00</p>
                </div>

                <button className="primary-button">
                    <img src={addCart} alt="add to cart"/>
                    Agregar al Carrito
                </button>

            </div>       
    
    </aside>    
    );
}

export default MyOrder;