import initiat_state from '../initial_state';
import createFlux from '../flux';
const flux = createFlux('meta');

const reducer = flux.createReducer(initiat_state.meta);
export default reducer;