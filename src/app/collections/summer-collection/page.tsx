import ProductSection from '@/app/components/productSection';
import { getSummerCollection } from '../../utils/summerCollection';

import styles from './style.module.scss';
import FilterBanner from '@/app/components/FilterBanner';

export default async function Summer() {
	const data = await getSummerCollection();
	// console.log(data[1].node.products.edges[0].node.variants.edges[0].node);
	return (
		<section className={styles.summerCollectionWrap}>
			<FilterBanner
				title={data[1].node.title}
				description='The warmer seasons of the year have sometimes felt like a mildly blank canvas. Our Spring Summer drop has been shaped just the way we like it, with attention to texture, color, trim and silhouette leading our design process. Follow the link to view our Spring Summer Look Book here.'
			/>
			<ProductSection data={data[1].node.products.edges} />
		</section>
	);
}
