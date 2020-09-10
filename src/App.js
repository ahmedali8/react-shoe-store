import React from 'react';

import { Header, Home, FeaturedProducts, NewArrivals, Footer, AboutUs, ContactUs, ProductIndex, ProductDetails, NotFound, Cart, Payment } from './components';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Header/ScrollToTop/ScrollToTop';

import styles from './App.module.css';

function App() {
	return (
		<div className={styles.container}>
			<Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="featured-products" element={<FeaturedProducts />} />
                <Route path="new-arrivals" element={<NewArrivals />} />

                <Route path="product-index" element={<ProductIndex />} />
                <Route path="product-index/:productId" element={<ProductDetails />} />

                <Route path="cart" element={<Cart />} />
                <Route path="cart/payment" element={<Payment />} />
                
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />

                {/* if nothing matches above then: */}
                <Route path="*" element={<NotFound />} />
            </Routes>

			<ScrollToTop /> 
			<Footer />
		</div>
	);
}

export default App;
