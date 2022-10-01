import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';
;

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
    }
    return (
        <aside className="MyOrder">
        <div className="title-container">
            <img src={arrow} alt="flechita"/>
            <p className="title">Mi Orden</p>
        </div>
    
        <div className="my-order-content">  
        {state.cart.map(product => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
            <div className="order">
                <p>
                    <span>TOTAL</span>
                </p>
                <p>${sumTotal()}</p>
            </div>

            <button className="primary-button">
                Agregar al Carrito
            </button>

        </div>       
    
    </aside>    
    );
}

export default MyOrder;