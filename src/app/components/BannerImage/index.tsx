import Image from 'next/image';
import styles from './styles.module.scss';

const BannerImage = () => {
	return (
		<section className={styles.bannerContainer}>
			<div className={styles.announcementBar}>
				<div className={styles.announcementBarInner}>
					<a href=''>
						<p>Summer Collection Live</p>
					</a>
				</div>
			</div>
			<Image
				src='/images/banner.svg'
				alt='Banner image'
				style={{ objectFit: 'cover' }}
				layout='responsive'
				width={1920}
				height={1080}
			/>
		</section>
	);
};

export default BannerImage;
