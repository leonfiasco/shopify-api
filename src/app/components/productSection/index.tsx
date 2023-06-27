import Image from 'next/image';
import { getSummerCollection } from '../../utils/summerCollection';

import styles from './styles.module.scss';

export default async function ProductSection() {
	const data = await getSummerCollection();

	const renderProducts = () => {
		return data[1].node.products.edges.map((item) => {
			const { id, title, images, variants } = item.node;
			console.log(images.edges);

			return (
				<li key={id} className={styles.listItem}>
					<div className={styles.imageWrap}>
						<Image
							src={images.edges[0].node.originalSrc}
							alt='product-img'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<p className={styles.productName}>{title}</p>
					<p className={styles.price}>
						{variants.edges[0].node.price} <span>gbp</span>
					</p>
				</li>
			);
		});
	};

	return (
		<section className={styles.productSection}>
			<ul className={styles.productList}>{renderProducts()}</ul>
		</section>
	);
}
