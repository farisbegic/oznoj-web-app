import React from 'react';
import Hero from '../components/Home/Hero';
import Join from '../components/Home/Join';
import Services from '../components/Home/Services';
import Footer from '../components/partials/Footer';
import Header from '../components/partials/Header';

function About() {
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<Join />
			<Footer />
		</>
	);
}

export default About;
