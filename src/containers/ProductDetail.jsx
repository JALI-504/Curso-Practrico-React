import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

import close from '@icons/icon_close.png';


const ProductDetail = () => {
    return (
        <aside className="product-detalle">
        <div className="product-detalle-close">
            <img src={close} alt="close"/>
        </div>    
        <ProductInfo />
    </aside>
        
    );
}

export default ProductDetail;