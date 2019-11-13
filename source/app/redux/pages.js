import initiat_state from '../initial_state';
import createFlux from '../flux';
const flux = createFlux('pages');

const reducer = flux.createReducer(initiat_state.pages);
export default reducer;