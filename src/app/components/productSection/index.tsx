'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductData } from '@/app/types';

import styles from './styles.module.scss';

type props = {
	data: ProductData[];
	collectionTitle: string;
};

const ProductSection = ({ data, collectionTitle }: props) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const renderProducts = () => {
		return data.map((item, index) => {
			const { id, title, images, handle } = item.node;

			const imageSrc =
				hoveredIndex === index
					? images.edges[1].node.originalSrc
					: images.edges[0].node.originalSrc;

			return (
				<li
					key={id}
					className={styles.listItem}
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<Link
						href={`${
							collectionTitle && collectionTitle.toLocaleLowerCase()
						}/product/${handle}`}
					>
						<div className={styles.imageWrap}>
							<Image
								src={imageSrc}
								alt={handle}
								fill
								style={{ objectFit: 'cover' }}
								priority
							/>
						</div>
						<div className={styles.productInfo}>
							<p className={styles.productName}>{title}</p>
							{/* <p className={styles.price}>
								{variants.edges[0].node.price} <span>gbp</span>
							</p> */}
						</div>
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
