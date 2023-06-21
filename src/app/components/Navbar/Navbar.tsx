import Image from 'next/image';
import styles from './styles.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navLeft}>
				<Image src='/seventh-logo.svg' alt='Logo' width={210} height={40} />
				<p>subscribe</p>
				<p>client service</p>
			</div>
			<div className={styles.navRight}>
				<p>subscribe</p>
				<p>client service</p>
			</div>
		</nav>
	);
};

export default Navbar;
