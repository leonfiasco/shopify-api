import styles from './styles.module.scss';

const SiteFooter = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.contentWrap}>
					<ul>
						<li>
							<h4>legal</h4>
						</li>
						<li>terms & conditions</li>
						<li>privacy policy</li>
					</ul>
					<ul>
						<li>
							<h4>company</h4>
						</li>
						<li>about</li>
						<li>contact</li>
						<li>press</li>
						<li>career</li>
						<li>gift card</li>
					</ul>
					<ul>
						<li>
							<h4>support</h4>
						</li>
						<li>help</li>
						<li>fAQS</li>
						<li>shipping</li>
						<li>excahnge and returns</li>
						<li>size guide</li>
						<li>stockist</li>
					</ul>
					<ul>
						<li>
							<h4>seventh space</h4>
						</li>
						<li>instagram</li>
						<li>twitter</li>
						<li>pintrest</li>
						<li>tik tok</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SiteFooter;
