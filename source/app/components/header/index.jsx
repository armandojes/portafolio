import React from 'react';
import style from './style.css';
import Container from '../container';

function header (){
	return (
		<header className={style.header} >
			<Container className={style.body}>
				hello header
			</Container>
		</header>
	)
}

export default header;