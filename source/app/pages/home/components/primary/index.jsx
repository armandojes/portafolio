import React from 'react';
import Container from '../../../../components/container';
import style from './style';
import useSelect from 'hooks/selector.js'

function Primary (props){
	
	const states = useSelect(state => state.pages.home.primary);
	
	console.log('render primary...');
	console.log(states);

	return (
		<section className={style.wrapper}>
			<Container className={style.container}>
				hello
			</Container>
		</section>
	);

}

export default Primary;