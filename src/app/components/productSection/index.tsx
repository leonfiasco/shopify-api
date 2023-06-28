'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductData } from '@/app/types';

import styles from './styles.module.scss';

type props = {
	data: ProductData[];
};

const ProductSection = ({ data }: props) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const renderProducts = () => {
		return data.map((item, index) => {
			const { id, title, images, variants, handle } = item.node;

			const imageSrc =
				hoveredIndex === index
					? images.edges[1].node.originalSrc
					: images.edges[0].node.originalSrc;

			return (
				<li key={id} className={styles.listItem}>
					<Link href={`products/${handle}`}>
						<div
							className={styles.imageWrap}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<Image
								src={imageSrc}
								alt='product-img'
								fill
								style={{ objectFit: 'cover' }}
							/>
						</div>

						<p className={styles.productName}>{title}</p>
						<p className={styles.price}>
							{variants.edges[0].node.price} <span>gbp</span>
						</p>
					</Link>
				</li>
			);
		});
	};

	return (
		<section className={styles.productSection}>
			<ul className={styles.productList}>{renderProducts()}</ul>
		</section>
	);
};

export default ProductSection;
