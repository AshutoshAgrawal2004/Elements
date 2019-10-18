import {
	GET_ELEMENTS,
	GET_ONE_ELEMENT,
	SET_LOADING,
	SEARCH_ELEMENTS,
	SHOW_ERROR,
	CLEAR_CURRENT
} from './types';
import axios from 'axios';
export const getElements = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get(
			'https://chemistrydata.herokuapp.com/elements'
		);
		const data = await res.data;
		console.log(data);
		dispatch({
			type: GET_ELEMENTS,
			payload: data
		});
	} catch (err) {
		// dispatch({
		// 	type: SHOW_ERROR,
		// 	payload: err.status
		// });
		console.log(err);
	}
};
export const getAnElement = name => async dispatch => {
	try {
		setLoading();
		const res = await axios.get(
			`https://chemistrydata.herokuapp.com/elements/${name}`
		);
		const data = await res.data;
		console.log(data);
		dispatch({
			type: GET_ONE_ELEMENT,
			payload: data
		});
	} catch (err) {
		// dispatch({
		// 	type: SHOW_ERROR,
		// 	payload: err.response.statusText
		// });
		console.log(err);
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	};
};
