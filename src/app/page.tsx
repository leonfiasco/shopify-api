// import { getAllProducts } from './utils/shopify';

import styles from './home.module.scss';
import BannerImage from './components/BannerImage';

export default async function Home() {
	//const data = await getAllProducts();

	return (
		<main className={styles.home}>
			<BannerImage />
		</main>
	);
}
