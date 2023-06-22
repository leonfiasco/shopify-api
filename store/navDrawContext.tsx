'use client';

import { useState, createContext, ReactNode } from 'react';
import { NavDrawValue } from '../src/app/types';

const NavDrawContext = createContext<NavDrawValue>({
	toggleNav: () => {},
	navDrawOpen: false,
	setNavDrawOpen: () => false,
});

type NavDrawProps = {
	children: ReactNode;
};

const NavDrawProvider: React.FC<NavDrawProps> = ({ children }) => {
	const [navDrawOpen, setNavDrawOpen] = useState(false);

	const toggleNav = () => {
		setNavDrawOpen(!navDrawOpen);
		console.log('clicked!!!', navDrawOpen);
	};

	return (
		<NavDrawContext.Provider
			value={{
				toggleNav,
				navDrawOpen,

				setNavDrawOpen,
			}}
		>
			{children}
		</NavDrawContext.Provider>
	);
};

export { NavDrawContext, NavDrawProvider };
