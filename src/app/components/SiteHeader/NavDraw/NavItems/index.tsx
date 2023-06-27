import { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

const NavItems = () => {
	const [selected, setSelected] = useState(null);
	const [isArrowDown, setIsArrowDown] = useState(false);

	const toggle = (i) => {
		if (selected === i) {
			setSelected(null);
			setIsArrowDown(false);
		} else {
			setSelected(i);
			setIsArrowDown(true);
		}
	};

	const navItems = [
		{ title: 'summer collection' },
		{ title: 'men', showArrow: true },
		{ title: 'women', showArrow: true },
		{ title: 'collaborations', showArrow: true },
	];

	const renderNavItems = () => {
		return navItems.map((item, i) => (
			<li className={styles.listItem} key={i} onClick={() => toggle(i)}>
				<div>
					<p>{item.title}</p>
					{item.showArrow && (
						<Image
							className={
								selected === i && isArrowDown ? styles.active : styles.upArrow
							}
							src='/siteIcons/upArrow.svg'
							alt='arrow'
							width={17}
							height={17}
						/>
					)}
				</div>
				{item.showArrow && (
					<ul
						className={`${styles.subList} ${
							selected === i ? styles.openSublist : ''
						}`}
					>
						<li>spring summer</li>
						<li>shop all</li>
						<li>tops</li>
						<li>bottoms</li>
						<li>jackets/coats</li>
					</ul>
				)}
			</li>
		));
	};

	return <ul className={styles.navList}>{renderNavItems()}</ul>;
};

export default NavItems;
