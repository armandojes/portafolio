import React from 'react';
import style from './style.css';
import Menu from './components/menu'
import MenuMovil from './components/menu_movil'
import Container from '../container';

function header (){

	return (
		<header className={style.header}>
			<div className={style.fixed} >
				<Container className={style.body}>
					<MenuMovil />
					<Menu />
				</Container>
			</div>
			<div className={style.height}/>
		</header>
	)
}

export default header;