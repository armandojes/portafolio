function createFlux(module_name){
	return {
		handlers: {},
		createAction(action_type, handler){
			//crear action y reducer para initial state
			if (!action_type){
				const action_type_initial_state = `${module_name}/${'set_initial_state'}`;
				this.handlers[action_type_initial_state] = state => state;
				return () => ({type: action_type_initial_state});
			} 
			else {
				//crear action y reducer personlizado
				const action_type_composed = `${module_name}/${action_type}`;
				this.handlers[action_type_composed] = handler;
				return (payload) => ({ type: action_type_composed, payload });
			}
		},
		createReducer(initial_State){
			//return reducer
			return (state = initial_State, action = {}) => {
				if (!this.handlers[action.type]) return state;
				return this.handlers[action.type](state, action.payload);
			}
		}
	}
}

export default createFlux;