import { SetStateAction, Dispatch } from 'react';

export interface NavDrawValue {
	toggleNav: () => void;
	navDrawOpen: boolean;
	setNavDrawOpen: Dispatch<SetStateAction<boolean>>;
}

export interface Image {
	node: {
		originalSrc: string;
		altText?: string;
	};
}

export interface Variants {
	edges: any;
	node: {
		variants: {
			edges: {
				node: {
					price: string;
				};
			};
		};
	};
}

export interface Product {
	id: string;
	title: string;
	handle: string;
	images: Image;
	variants: Variants;
}

export interface ProductData {
	node: Product;
}

export interface CollectionData {
	node: {
		id: string;
		title: string;
		products: ProductData;
	};
}
