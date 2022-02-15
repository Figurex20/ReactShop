import React from 'react';
import ProductInfo from '../components/ProductInfo.jsx';
import '@styles/ProductInfo.scss';
import close from '@icons/icon_close.png';

function ProductDetail() {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export { ProductDetail };
