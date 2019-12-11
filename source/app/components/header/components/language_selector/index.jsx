import React, {useState} from 'react';
import style from './style'
import useSelector from 'hooks/selector';
import {set_language} from 'flux/language';
import {useDispatch} from 'react-redux';
import {set_cookie} from 'helpers/cookie'


function LanguageSelect (props){
  
  const language = useSelector(state => state.language);
  const [menu_show, set_menu_show] = useState(false);
  
  const dispatch = useDispatch();

  const handle_click = (value) => {
    dispatch(set_language(value));
    set_cookie('language', value);
    props.handle_click && props.handle_click();
  }

  return (
    <div className={`${style.language_lecetor_item} ${props.className}`} onClick={() => {set_menu_show(!menu_show)}}>
      <div className={style.display_language}>{language === 'es' ? 'ES' : 'EN'}</div>
      <img src={`${ASSETS}/icon/arrow.png`} />
      {menu_show && (
        <section className={style.content_desplegable} >
          <div className={style.option} onClick={() => handle_click('es')}>ES</div>
          <div className={style.option} onClick={() => handle_click('us')}>EN</div>
        </section>
      )}
    </div>
  )
}

export default LanguageSelect;