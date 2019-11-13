import initiat_state from '../initial_state';
import createFlux from '../flux';


const flux = createFlux('');

export const set_language = flux.createAction('SET_LANGUAGE', (state, payload) => {
	return payload;
});

export default flux.createReducer(initiat_state.language);