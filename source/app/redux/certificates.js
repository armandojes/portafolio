import initiat_state from '../initial_state';
import createFlux from '../flux';


const flux = createFlux('certificates');

const reducer = flux.createReducer(initiat_state.certificates);

export default reducer;