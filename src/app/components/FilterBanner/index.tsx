import styles from './style.module.scss';

type props = {
	title: string;
	description: string;
};

const FilterBanner = ({ title, description }: props) => {
	return (
		<section className={styles.bannerContainer}>
			<div className={styles.bannerInner}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</section>
	);
};

export default FilterBanner;
