import { SetStateAction, Dispatch } from 'react';

export interface NavDrawValue {
	toggleNav: () => void;
	navDrawOpen: boolean;
	setNavDrawOpen: Dispatch<SetStateAction<boolean>>;
}
