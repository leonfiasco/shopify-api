import { GetStaticPaths } from 'next';
import { Product } from '../../../../types/index';
import { getAllProducts } from '../../../../utils/shopify';

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await getAllProducts();

	const paths = products.map((product: Product) => ({
		params: { handle: product.handle },
	}));

	return {
		paths,
		fallback: false,
	};
};
