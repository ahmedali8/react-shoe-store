import React from 'react';

import { Hero, FeaturedProducts, NewArrivals } from '../../components';

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedProducts />
            <NewArrivals />
        </div>
    );
};

export default Home;
