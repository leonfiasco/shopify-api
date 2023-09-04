import Link from 'next/link';
import ImageTag from 'next/image';
import { SingleImage } from '../../../../types/index';
import { getProductByHandle } from '../../../../utils/shopify';

import DropDown from '@/app/components/Dropdown';
import PaymentBtn from '@/app/components/PaymentBtn';
import styles from './styles.module.scss';

type props = {
	params: {
		handle: string;
	};
};

export default async function WomansSinglePage({ params }: props) {
	const product = await getProductByHandle(params.handle);

	const renderImages = () => {
		return product.images.edges.length
			? product.images.edges.map((img: SingleImage, i: number) => {
					const { originalSrc } = img.node;

					return (
						<div className={styles.imageWrap} key={i}>
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
			: null;
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
				{product.title && <h2 className={styles.productTitle}>{product.title}</h2>}
				<DropDown />
				<PaymentBtn price={product.priceRange.minVariantPrice.amount} />

				<hr className={styles.horizontalLine} />

				<div className={styles.productDescription}>
					<p>details</p>
					{product.descriptionHtml && (
						<article dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
					)}
				</div>
			</div>
		</section>
	);
}
