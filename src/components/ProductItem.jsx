import React from 'react';
import "../styles/ProductItem";

const ProductItem = () => {
    return (
        <div className="product-card">
               <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
                <div className="product-info">
                    <div>
                        <p>L. 1,200.00</p>
                        <p>Bicicleta</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt=""/>
                    </figure>
                </div>
            </div>
    );
}

export default ProductItem;