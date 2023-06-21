import { getAllProducts } from './utils/shopify';

export default async function Home() {
	const data = await getAllProducts();
	const renderProducts = () => {
		return (
			data &&
			data.map((val) => {
				const { id, title } = val.node;
				return (
					<li key={id}>
						<p>{title}</p>
					</li>
				);
			})
		);
	};

	renderProducts();
	return (
		<div className='bg-white'>
			<ul>{renderProducts()}</ul>
		</div>
	);
}
