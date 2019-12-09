import React, {useState} from 'react';
import style from './style'
import useSelector from 'hooks/selector';

function LanguageSelect (props){
  
  const language = useSelector(state => state.language);
  const [menu_show, set_menu_show] = useState(false);

  return (
    <div className={`${style.language_lecetor_item} ${props.className}`} onClick={() => {set_menu_show(!menu_show)}}>
      <div className={style.display_language}>{language === 'es' ? 'ES' : 'EN'}</div>
      <img src={`${ASSETS}/icon/arrow.png`} />
      {menu_show && (
        <section className={style.content_desplegable} >
          <div className={style.option}>ES</div>
          <div className={style.option}>EN</div>
        </section>
      )}
    </div>
  )
}

export default LanguageSelect;