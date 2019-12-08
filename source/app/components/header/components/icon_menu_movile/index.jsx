import React, {useState} from 'react';
import style from './style';


function MenuMovilIcon (props){
	return (
		<div className={style.menu_container}>
			<img 
				className={style.icon} 
				src={`${ASSETS}/icon/menu_movil.png`} 
				onClick={props.handle_click}
			/>
		</div>
	)
}

export default MenuMovilIcon