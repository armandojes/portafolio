import React from 'react';
import style from './style';

function Container (props){
	return (
		<section className={`${props.className || ''} ${style.container}`}>
			{props.children}
		</section>
	)
}

export default Container