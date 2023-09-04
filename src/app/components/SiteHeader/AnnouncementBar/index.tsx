import Link from 'next/link';
import styles from './style.module.scss';

const AnnouncementBar = () => {
	return (
		<div className={styles.announcementBar}>
			<div className={styles.announcementBarInner}>
				<p>Summer Collection Live</p>
			</div>
		</div>
	);
};

export default AnnouncementBar;
