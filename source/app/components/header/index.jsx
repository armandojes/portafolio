import React from 'react';
import style from './style.css';
import Menu from './components/menu'
import MenuMovil from './components/menu_movil'
import Container from '../container';

function header (){

	return (
		<header className={style.header} >
			<Container className={style.body}>
				<MenuMovil />
				<Menu />
			</Container>
		</header>
	)
}

export default header;