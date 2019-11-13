import { useSelector } from 'react-redux';

function selector(handler){
	const state = useSelector(handler);
	const language = useSelector(state => state.language);
	
	return state.map( object => object[language])
}

export default selector;