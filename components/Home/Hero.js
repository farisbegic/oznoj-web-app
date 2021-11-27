import React from 'react';
import Button from '../partials/Button';
import Image from 'next/image';
import Typist from 'react-typist';
const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-left'>
				<h3 className='hero-heading'>
					<Typist>Make health your priority!</Typist>
				</h3>
				<p className='hero-text'>
					Exercise helps people lose weight and lower the risk of some diseases.
					Exercising regularly lowers a person's risk of developing some
					diseases, including obesity, type 2 diabetes, and high blood pressure.
					Exercise also can help keep your body at a healthy weight. Exercise
					can help a person age well.
				</p>
				<Button filled='true' />
			</div>
			<div className='hero-img'>
				<Image
					src='/hero.svg'
					width='687px'
					height='375px'
					className='hero-img'
					alt='heroimage'
				/>
			</div>
		</div>
	);
};

export default Hero;
