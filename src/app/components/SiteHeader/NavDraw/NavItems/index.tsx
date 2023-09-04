import { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NavDrawContext } from '../../../../../../store/navDrawContext';

import styles from './styles.module.scss';

const NavItems = () => {
	const [selected, setSelected] = useState<number | null>(null);

	const [isArrowDown, setIsArrowDown] = useState(false);

	const { setNavDrawOpen } = useContext(NavDrawContext);

	const toggle = (i: number) => {
		if (selected === i) {
			setSelected(null);
			setIsArrowDown(false);
		} else {
			setSelected(i);
			setIsArrowDown(true);
		}
	};

	const navItems = [
		{ title: 'men', showArrow: true },
		{ title: 'women', showArrow: true },
	];

	const renderNavItems = () => {
		return navItems.map((item, i) => (
			<>
				<li className={styles.listItem} key={i}>
					<div>
						<p onClick={() => toggle(i)}>{item.title}</p>
						{item.showArrow && (
							<Image
								onClick={() => toggle(i)}
								className={`${styles.arrow} ${
									selected === i && isArrowDown ? styles.active : ''
								}`}
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
							<li>
								<Link
									href={
										item?.title === 'men' ? '/collections/mens' : '/collections/womens'
									}
									onClick={() => setNavDrawOpen(false)}
								>
									shop all
								</Link>
							</li>
						</ul>
					)}
				</li>
			</>
		));
	};

	return <ul className={styles.navList}>{renderNavItems()}</ul>;
};

export default NavItems;
