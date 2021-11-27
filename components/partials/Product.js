import React from 'react';
import Link from 'next/link';

const Product = (props) => {
	return (
		<div className='product'>
			<div className='product-card'>
				<img alt='sups' src={props.img} width='192px' height='171px' />
				<h5 className='product-card-heading'>{props.name}</h5>
				<p className='product-card-text'>{props.foodSources}</p>
				<Link href={`/supplements/${props.id}`}>
					<a className='supplement-link'>Read More</a>
				</Link>
			</div>
		</div>
	);
};

export default Product;
