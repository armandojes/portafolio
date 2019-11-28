import { combineReducers } from 'redux';
import meta from './meta';
import language from './language';
import pages from './pages';
import projects from './projects';

export default combineReducers(
	{
		pages,
		language,
		meta,
		projects,
	}
);