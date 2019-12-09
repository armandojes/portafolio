import React from 'react';
import style from './style';
import Container from 'components/container'
import useSelector from 'hooks/selector';
import { Link } from 'react-router-dom';
import LanguageSelector from '../language_selector'

function MenuMobile (props){

  const menu = useSelector(state => state.meta.menu);

  return (
    <Container className={style.menu_container}>
      {menu.map((list_item, index) => (
        <Link
          className={style.list_item}
          to={list_item.path}
          key={index}
          onClick={props.handle_click}
          >
          {list_item.text}
        </Link>
      ))}
      <LanguageSelector className={style.list_item_language} />
    </Container>
  )
}

export default MenuMobile;