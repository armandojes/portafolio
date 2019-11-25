import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function Languages (){

  const language = useSelector(state => state.language);
  
  const content = {
    title: language === 'es' ? 'Lenguajes' : 'Languages',
    list: [
      {icon: `${ASSETS}/icon/javascript.png`, text: 'Javascript'},
      {icon: `${ASSETS}/icon/php.png`, text: 'Php'},
      {icon: `${ASSETS}/icon/html.png`, text: 'HTML'},
      {icon: `${ASSETS}/icon/css.png`, text: 'Css'},
      {icon: `${ASSETS}/icon/sql.png`, text: 'SQL'},
    ],
  }

  return (
    <Section content={content} />
  )
}

export default Languages;