import React from 'react';

import { Header, Hero, FeaturedProducts, OurProducts } from './components';

import './App.module.css';

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<FeaturedProducts />
			<OurProducts />
		</div>
	);
}

export default App;
