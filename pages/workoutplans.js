import React from 'react';
import Head from 'next/head';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import Hero from '../components/Home/Hero';
import WorkoutPlansComponent from '../components/WorkoutPlans/WorkoutPlansComponent';

const WorkoutPlans = () => {
	return (
		<>
			<Head>
				<title>Sweat - Workout Plans</title>
			</Head>
			<Header />
			<Hero
				heroTitle='Check out some of our completely customizable workout plans!'
				heroText=''
				heroImg='/hero.svg'
			/>
			<WorkoutPlansComponent />
			<Footer />
		</>
	);
};

export default WorkoutPlans;
