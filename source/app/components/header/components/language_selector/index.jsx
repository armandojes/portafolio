import React from 'react';
import style from './style'
import useSelector from 'hooks/selector';

function LanguageSelect (props){
  
  const language = useSelector(state => state.language);

  return (
    <select className={`${style.select} ${props.className}`}>
      <option value="us">{language === 'es' ? 'Ingles' : 'English'}</option>    
      <option value="es">{language === 'es' ? 'Español' : 'Spanish'}</option>    
    </select>
  )
}

export default LanguageSelect;