import {
	GET_ELEMENTS,
	GET_ONE_ELEMENT,
	SET_LOADING,
	SEARCH_ELEMENTS,
	SHOW_ERROR,
	CLEAR_CURRENT
} from '../actions/types';

const initialState = {
	elements: null,
	current: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ELEMENTS:
			return {
				...state,
				elements: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_ONE_ELEMENT:
			return {
				...state,
				current: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
