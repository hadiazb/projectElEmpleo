import { UI } from '../types';

export const showModalAction = () => {
	return {
		type: UI.SHOW_MODAL,
	};
};

export const hideModalAction = () => {
	return {
		type: UI.HIDE_MODAL,
	};
};
