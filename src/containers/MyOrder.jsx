import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';

const MyOrder = () => {
    return (
        <aside className="product-detalle">
        <div className="titulo-conteiner">
            <img src="./icons/flechita.svg" alt="flechita"/>
            <p className="titulo">Mi Orden</p>
        </div>
    
        <div className="my-order-container">  
        <OrderItem />
                <div className="order">
                    <p>
                        <span>TOTAL</span>
                    </p>
                    <p>L. 9,000.00</p>
                </div>

                <button className="primary-button add-cart">
                    <img src="./icons/bt_add_to_cart.svg" alt="add to cart"/>
                    Agregar al Carrito
                </button>

            </div>       
    
    </aside>    
    );
}

export default MyOrder;