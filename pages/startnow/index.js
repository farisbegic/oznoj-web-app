import React from 'react';
import Hero from '../../components/Home/Hero';
import StartForm from '../../components/StartNow/StartForm';

const startnow = () => {
	return (
		<>
			<Hero
				heroTitle="Let's get you in shape!"
				heroText='You are about to get the best meal & workout plan of your life!'
				heroImg='/hero.svg'
				noButton='true'
			/>
			<StartForm />
		</>
	);
};

export default startnow;
