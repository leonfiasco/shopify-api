'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { NavDrawContext } from '../../../../../store/navDrawContext';

import styles from './styles.module.scss';

const Navbar = () => {
	const { toggleNav, navDrawOpen, setNavDrawOpen } = useContext(NavDrawContext);

	const renderMobileBtns = () => {
		return (
			<div className={styles.menuWrap} onClick={() => toggleNav()}>
				<p>menu</p>
				<div className={styles.burgerContainer}>
					<button
						type='button'
						className={`${styles.hamburger} ${navDrawOpen ? styles.active : ''}`}
					>
						<span />
						<span />
					</button>
				</div>
			</div>
		);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navLeft}>
				<Image
					src='/siteIcons/seventh-logo.svg'
					alt='Logo'
					width={210}
					height={40}
				/>
				<p>subscribe</p>
				<p>client service</p>
			</div>
			<div className={styles.navRight}>
				<p>united kingdom</p>
				<Image src='/siteIcons/heart.svg' alt='heart' width={20} height={23} />
				<Image src='/siteIcons/bag.svg' alt='bag' width={20} height={23} />
				<Image src='/siteIcons/person.svg' alt='user' width={20} height={23} />
				<Image src='/siteIcons/search.svg' alt='search' width={20} height={23} />

				{renderMobileBtns()}
			</div>
		</nav>
	);
};

export default Navbar;
