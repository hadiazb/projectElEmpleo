import { AUTH } from '../types';

const initialState = {
	auth: false,
	token: '',
	role: null,
	loading: false,
	error: '',
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH.GET_USER:
			return {
				...state,
				auth: action.payload.auth,
				token: action.payload.token,
				role: action.payload.role,
				loading: false,
				error: '',
			};
		case AUTH.LOADING:
			return {
				...state,
				loading: true,
			};
		case AUTH.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
