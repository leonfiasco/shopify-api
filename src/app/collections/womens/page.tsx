import ProductSection from '@/app/components/productSection';
import { getShopAll } from '../../utils/shopify';

import styles from './style.module.scss';
import FilterBanner from '@/app/components/FilterBanner';

export default async function Womens() {
	const data = await getShopAll();

	return (
		<section className={styles.womensCollection}>
			{data.length ? (
				<FilterBanner
					title={data[1]?.node?.title}
					description={`Don't compromise comfort for style: you can have both. Explore our range of unisex apparel, from our joggers in our signature V1 fabric to our utility wear combats.`}
				/>
			) : null}

			{data.length ? (
				<ProductSection
					data={data[1]?.node?.products.edges}
					collectionTitle={data[1]?.node.title}
				/>
			) : null}
		</section>
	);
}
