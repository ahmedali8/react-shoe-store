import React from 'react';

import { Header, Hero, FeaturedProducts, OurProducts, Footer } from './components';

import './App.module.css';

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<FeaturedProducts />
			<OurProducts />
			<Footer />
		</div>
	);
}

export default App;
