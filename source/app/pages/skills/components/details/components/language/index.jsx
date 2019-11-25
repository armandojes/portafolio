import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function Language (){

  const language = useSelector(state => state.language);
  
  const content = {
    title: language === 'es' ? 'Idiomas' : 'Language',
    list: [
      {icon: `${ASSETS}/icon/language.png`, text: language === 'es' ? 'Español (Nativo)' : 'Spanish (Native)'},
      {icon: `${ASSETS}/icon/language.png`, text: language === 'es' ? 'Ingles' : 'English'},
    ],
  }

  return (
    <Section content={content} />
  )
}

export default Language;