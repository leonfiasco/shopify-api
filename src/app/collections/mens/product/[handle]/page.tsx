import Link from 'next/link';
import ImageTag from 'next/image';
import { Product, Image } from '../../../../types/index';
import { getAllProducts, getProductByHandle } from '../../../../utils/shopify';

import styles from './style.module.scss';

type props = {
	params: {
		handle: string;
	};
};

export const dynamicParams = false;

export async function getStaticPaths() {
	const products = await getAllProducts();

	const paths = products.map(
		(product: Product) => `/collections/mens/product/${product.handle}`
	);

	return {
		paths,
		fallback: false,
	};
}

export default async function MensSingle({ params }: props) {
	const product = await getProductByHandle(params.handle);

	const renderImages = () => {
		return (
			product &&
			product.images.edges.map((img: Image) => {
				const { originalSrc, altText } = img.node;

				return (
					<div className={styles.imageWrap} key={product.id}>
						<ImageTag
							src={originalSrc}
							alt={product.title}
							height={750}
							width={485}
							style={{ objectFit: 'cover' }}
							priority
						/>
					</div>
				);
			})
		);
	};

	return (
		<section className={styles.productSingle}>
			<div className={styles.productImage}>{renderImages()}</div>
			<div className={styles.productInfo}>
				<div className={styles.breadCrumbs}>
					<ol>
						<li>
							<Link href={'/'}>home</Link>
						</li>
						<li>
							<Link href={'/'}>men</Link>
						</li>
						<li>
							<Link href={'/'}>{product.title}</Link>
						</li>
					</ol>
				</div>
				<h2 className={styles.productTitle}>{product.title}</h2>
				<div className={styles.dropDownWrap}>
					<select className={styles.sizeDropDown} placeholder={'select a size'}>
						<option value='S'>S</option>
						<option value='M'>M</option>
						<option value='L'>L</option>
						<option value='XL'>XL</option>
					</select>
					<select className={styles.quantityDropDown}>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
					</select>
				</div>
			</div>
		</section>
	);
}
