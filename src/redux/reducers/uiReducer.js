import { UI } from '../types';

const initialState = {
	show_modal: false,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case UI.SHOW_MODAL:
			return {
				...state,
				show_modal: true,
			};
		case UI.HIDE_MODAL:
			return {
				...state,
				show_modal: false,
			};
		default:
			return state;
	}
};
