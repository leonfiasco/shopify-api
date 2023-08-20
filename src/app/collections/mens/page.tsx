import ProductSection from '@/app/components/productSection';
import { getShopAll } from '../../utils/shopify';

import styles from './style.module.scss';
import FilterBanner from '@/app/components/FilterBanner';

export default async function Mens() {
	const data = await getShopAll();

	return (
		<section className={styles.mensCollection}>
			{data.length ? (
				<FilterBanner
					title={data[0].node.title}
					description='Feel at home in our selection of unisex pieces. From our classic Trucker style trousers to our innovative V2 hoodie, our pieces are made to be seen and rested in.'
				/>
			) : null}
			{data.length ? (
				<ProductSection
					data={data[0].node.products.edges}
					collectionTitle={data[0].node.title}
				/>
			) : null}
		</section>
	);
}
