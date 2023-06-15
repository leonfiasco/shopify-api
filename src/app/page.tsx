import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Learning Shopify Api</title>
				<meta name='description' content='Please give some bread' />
			</Head>
			<main className={styles.main}>
				<h1>Store Mephaasixe</h1>
				<div className={styles.products}>
					{/* 
					Add products
					*/}
				</div>
			</main>
		</div>
	);
}
