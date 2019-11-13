import React from 'react';
import style from './style';
import { useSelector } from 'react-redux'

function Menu (){

	const state = useSelector((state => state.meta.menu));
	
	return (
		<div className={style.menu_content}>
			hello menu desktop
		</div>
	)
}

export default Menu