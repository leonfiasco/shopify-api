import { SetStateAction, Dispatch } from 'react';

export interface NavDrawValue {
	toggleNav: () => void;
	navDrawOpen: boolean;
	setNavDrawOpen: Dispatch<SetStateAction<boolean>>;
}

export interface Image {
	edges: any;
	images: {
		edges: {
			node: {
				originalSrc: string;
			};
		};
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

export interface ProductData {
	map(arg0: (item: any) => import('react').JSX.Element): unknown;
	node: {
		id: string;
		title: string;
		handle: string;
		images: Image;
		variants: Variants;
	};
}
