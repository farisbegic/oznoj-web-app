import Header from '../components/partials/Header';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import Join from '../components/Home/Join';
import Footer from '../components/partials/Footer';
import React, { useEffect, useState } from 'react';

import { funkcija } from '../api/getRecepies';

export default function Home() {
	const [recept1, setRecept1] = useState({});

	useEffect(async () => {
		setRecept1(await funkcija('soup'));
	}, []);

	console.log(recept1);

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
