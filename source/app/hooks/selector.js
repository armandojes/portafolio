import { useSelector } from 'react-redux';

function selector(handler){
	const state = useSelector(handler);
	const language = useSelector(state => state.language);
	return extrat_rec(state, language);
}

function extrat_rec (data, language){
	
	//verificar valor final 
	if (getType(data) === 'object'){
		if (data[language]){
			
			return data[language];
		}
	}


	if (getType(data) === 'array'){
		return data.map( object => extrat_rec(object, language))
	}
	
	if (getType(data) === 'object') {
		const keys = Object.keys(data);
		var newObj = {};
		keys.map(key => {
			
		})
		
	}

	return data;
}


function getType(data){
	if (Array.isArray(data)) return 'array';
	if (typeof data === 'object') return 'object';
	return 'primitiv'
}



export default selector;