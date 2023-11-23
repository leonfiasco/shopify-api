import Image from 'next/image';
import styles from './styles.module.scss';

const BannerImage = () => {
	return (
		<section className={styles.bannerContainer}>
			<Image
				priority
				src='/images/banner.svg'
				alt='Banner-image'
				style={{ objectFit: 'cover' }}
				fill
			/>
		</section>
	);
};

export default BannerImage;
