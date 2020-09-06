import React from 'react';

import { Header, Hero, FeaturedProducts, OurProducts, Footer } from './components';

import './App.module.css';
import ScrollToTop from './components/Header/ScrollToTop/ScrollToTop';

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<FeaturedProducts />
			<OurProducts />
			<ScrollToTop />
			<Footer />
		</div>
	);
}

export default App;
