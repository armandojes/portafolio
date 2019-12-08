import React, { useState } from 'react';
import style from './style.css';
import Menu from './components/menu'
import IconMenuMovil from './components/icon_menu_movile'
import Container from '../container';
import MenuMobile from './components/menu_mobile';



function header (){
	const [menu, set_menu] = useState(false);
	const handle_click = () => {set_menu(!menu)}

	return (
		<header className={style.header}>
			<div className={style.fixed} >
				<Container className={style.body}>
					<IconMenuMovil handle_click={handle_click}/>
					<Menu />
				</Container>
			</div>
			<div className={style.height} />
			{menu && (<MenuMobile handle_click={handle_click} />)}
		</header>
	)
}

export default header;