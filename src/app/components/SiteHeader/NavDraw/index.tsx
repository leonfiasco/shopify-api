import { useContext } from 'react';
import Navitems from './NavItems';

import { NavDrawContext } from '../../../../../store/navDrawContext';

import styles from './styles.module.scss';

const NavDraw = (): JSX.Element => {
	const { navDrawOpen } = useContext(NavDrawContext);

	return (
		<div className={`${styles.navDraw} ${navDrawOpen ? styles.active : null}`}>
			<div className={styles.inner}>
				<Navitems />
			</div>
		</div>
	);
};

export default NavDraw;
