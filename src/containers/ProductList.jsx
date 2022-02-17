import React, { useEffect, useState } from 'react';
import { ProductItem } from '@components/ProductItem';
import { useGetProducts } from '@hooks/useGetProducts.jsx';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

function ProductList() {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product) => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export { ProductList };
