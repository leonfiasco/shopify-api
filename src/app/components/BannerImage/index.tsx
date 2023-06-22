import Image from 'next/image';
import styles from './styles.module.scss';

const BannerImage = () => {
	return (
		<div className={styles.bannerContainer}>
			<Image
				src='/images/banner.svg'
				alt='Banner image'
				style={{ objectFit: 'cover' }}
				layout='responsive'
				width={1920}
				height={1080}
			/>
		</div>
	);
};

export default BannerImage;
