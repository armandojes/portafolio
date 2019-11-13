import React from 'react';
import style from './style';
import useSelector from '../../../../hooks/selector';
import { NavLink  , useLocation } from 'react-router-dom';

function Menu (){
	

	const items_menu = useSelector(state => state.meta.menu);

	return (
		<div className={style.menu_content}>
			{items_menu.map(menu => 
				<NavLink   
					exact={true} 
					to={menu.path} 
					activeClassName={style.seleted} 
					className={style.menu} key={menu.text}>{menu.text} 
				</NavLink  >
			)}
		</div>
	)
}

export default Menu