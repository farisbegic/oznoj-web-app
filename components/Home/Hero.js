import React from 'react';
import Button from '../partials/Button';
import Image from 'next/image';
import Typist from 'react-typist';
const Hero = ({ heroTitle, heroText, heroImg }) => {
	return (
		<div className='hero'>
			<div className='hero-left'>
				<h3 className='hero-heading'>
					<Typist>{heroTitle}</Typist>
				</h3>
				<p className='hero-text'>{heroText}</p>
				<Button filled='true' />
			</div>
			<div className='hero-img'>
				<Image
					src={heroImg}
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
