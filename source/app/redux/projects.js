import initiat_state from '../initial_state';
import createFlux from '../flux';
const flux = createFlux('projects');

const reducer = flux.createReducer(initiat_state.projects);
export default reducer;