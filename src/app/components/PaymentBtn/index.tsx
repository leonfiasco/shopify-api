'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './style.module.scss';

type props = {
	price: string;
};

const PaymentBtn = ({ price }: props) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<>
			<button
				className={`${styles.paymentBtn} ${isHovered ? styles.slideOut : null}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<span className={styles.iconTextWrap}>
					<Image
						className={styles.navIcon}
						src='/siteIcons/whitebag.svg'
						alt='bag'
						width={25}
						height={30}
					/>
					<span>Add</span>
				</span>
				<span className={styles.price}>{price} GBP</span>
			</button>
		</>
	);
};

export default PaymentBtn;
