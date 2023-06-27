import styles from './style.module.scss';

const AnnouncementBar = () => {
	return (
		<div className={styles.announcementBar}>
			<div className={styles.announcementBarInner}>
				<a href=''>
					<p>Summer Collection Live</p>
				</a>
			</div>
		</div>
	);
};

export default AnnouncementBar;
