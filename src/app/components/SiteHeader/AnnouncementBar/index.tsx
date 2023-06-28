import Link from 'next/link';
import styles from './style.module.scss';

const AnnouncementBar = () => {
	return (
		<div className={styles.announcementBar}>
			<Link href={'/collections/summer-collection'}>
				<div className={styles.announcementBarInner}>
					<p>Summer Collection Live</p>
				</div>
			</Link>
		</div>
	);
};

export default AnnouncementBar;
