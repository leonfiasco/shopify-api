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
				layout='responsive'
				width={1920}
				height={1080}
			/>
		</section>
	);
};

export default BannerImage;
