import React from 'react';
import style from './style';
import useSelector from '../../../../hooks/selector';
import { Link } from 'react-router-dom';

function Menu (){
	

	const items_menu = useSelector(state => state.meta.menu);
	
	console.log('render_menu')
	
	return (
		<div className={style.menu_content}>
			{items_menu.map(menu => 
				<Link to={menu.path} key={menu.text}>{menu.text}</Link>
			)}
		</div>
	)
}

export default Menu