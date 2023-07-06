import styles from './home.module.scss';
import BannerImage from './components/BannerImage';

export default async function Home() {
	return (
		<main className={styles.home}>
			<BannerImage />
		</main>
	);
}
