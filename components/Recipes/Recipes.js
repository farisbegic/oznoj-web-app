import React from 'react';
import Product from '../partials/Product';
import { supplementData } from '../../api/supplements';

const Recipes = () => {
	return (
		<div className='recipes'>
			{supplementData.map((supplement) => (
				<Product key={supplement.id} {...supplement} />
			))}
		</div>
	);
};

export default Recipes;
