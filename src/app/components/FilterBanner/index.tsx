import styles from './style.module.scss';

type props = {
	title: string;
	description: string;
};

const FilterBanner = ({ title, description }: props) => {
	return (
		<section className={styles.bannerContainer}>
			<h3>{title}</h3>
			<p>{description}</p>
		</section>
	);
};

export default FilterBanner;
