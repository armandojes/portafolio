import { combineReducers } from 'redux';
import meta from './meta';
import language from './language';
import pages from './pages';

export default combineReducers(
	{
		pages,
		language,
		meta,
	}
);