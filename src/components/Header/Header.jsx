import React, { useEffect, useState } from 'react';

import NavBar from './NavBar/NavBar';
import MobileNavBar from './MobileNavBar/MobileNavBar';

const Header = () => {

	const navNames = ['Home', 'Featured', 'Products', 'About us', 'Contact us'];

	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 720px)').matches
	);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setIsMobile(window.matchMedia('(max-width: 720px)').matches);
		});
	}, []);

	return (
		<>
			{isMobile ? (
				<MobileNavBar navNames={navNames} />
			) : (
					<NavBar navNames={navNames} />
				)}
		</>
	);
};

export default Header;
