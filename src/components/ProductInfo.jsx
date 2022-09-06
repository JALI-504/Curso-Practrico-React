import React from 'react';
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
    return (
        <aside className="ProductInfo">
        <div className="ProductInfo-close">
            <img src="./icons/icon_close.png" alt="close"/>
        </div>    
        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="bicicleta"/>
        <div className="product-info">
            <p>L. 1,500.00</p>
            <p>Bicicleta</p>
            <p>Bicicleta estilo montañesa, ideal para realizar senderismo y recorrer grandes distancais</p>
            <button className="primary-button add-cart">
                <img src="./icons/bt_add_to_cart.svg" alt="add to cart"/>
                Agregar al Carrito
            </button>
        </div>
    </aside>
    );
}

export default ProductInfo;