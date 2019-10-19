import {
	GET_ELEMENTS,
	GET_ONE_ELEMENT,
	SET_LOADING,
	SEARCH_ELEMENTS,
	CLEAR_SEARCH,
	SHOW_ERROR,
	CLEAR_CURRENT
} from '../actions/types';

const initialState = {
	elements: null,
	filtered_elements: null,
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

		case GET_ONE_ELEMENT:
			return {
				...state,
				current: action.payload,
				loading: false
			};
		case SEARCH_ELEMENTS:
			return {
				...state,
				filtered_elements: Object.keys(state.elements).filter(
					element => {
						const regex = new RegExp(`${action.payload}`, 'gi');
						return element.match(regex);
					}
				)
			};
		case CLEAR_SEARCH:
			return {
				...state,
				filtered_elements: null
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
