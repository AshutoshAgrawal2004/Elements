import { combineReducers } from 'redux';
import elementReducer from './elementReducer';

export default combineReducers({
	elements: elementReducer
});
