import React from 'react';
import style from './style';
import useSelector from '../../../../hooks/selector';
import { NavLink } from 'react-router-dom';
import LanguageSelector from '../language_selector';

function Menu (){
	
	const items_menu = useSelector(state => state.meta.menu);

	return (
		<div className={style.menu_content}>
			{items_menu.map(menu => 
				<NavLink   
					exact={true} 
					to={menu.path} 
					activeClassName={style.seleted} 
					className={style.menu} key={menu.text}>
					{menu.text} 
				</NavLink>
			)}
			<LanguageSelector className={style.menu} />
		</div>
	)
}

export default Menu