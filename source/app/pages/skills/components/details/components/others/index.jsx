import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function Software (){

  const language = useSelector(state => state.language);
  
  const content = {
    title: language === 'es' ? 'Otros' : 'Others',
    list: [
      {icon: `${ASSETS}/icon/cmd.png`, text: language === 'es' ? 'Terminal y linea de comandos' : 'Terminal and command line' },
      {icon: `${ASSETS}/icon/seo.png`, text: language === 'es' ? 'Posicionamiento en buscadores' : 'Search Engine Opimization'},
      {icon: `${ASSETS}/icon/marketing.png`, text: 'Marketing'}
    ],
  }

  return (
    <Section content={content} />
  )
}

export default Software;