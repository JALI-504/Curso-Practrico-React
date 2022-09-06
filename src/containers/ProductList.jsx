import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const ProductList = () => {
    return (
        <section className="ProductList">
			<div className="ProductList-div">
				<ProductItem />
			</div>
		</section>
    );
}

export default ProductList;