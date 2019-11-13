import { combineReducers } from 'redux';
import meta from './meta';
import language from './language';

export default combineReducers(
	{
		language,
		meta,
	}
);