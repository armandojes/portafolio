import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function Frontend (){

  const language = useSelector(state => state.language);
  
  const content = {
    title: language === 'es' ? 'Frontend' : 'Frontend',
    list: [
      {icon: `${ASSETS}/icon/react.png`, text: 'React, React Router'},
      {icon: `${ASSETS}/icon/redux.png`, text: 'Redux'},
      {icon: `${ASSETS}/icon/vue.png`, text: 'Vue'},
      {icon: `${ASSETS}/icon/pug.png`, text: 'Pug'},
      {icon: `${ASSETS}/icon/responsive.png`, text: 'Responsive Design'},
    ],
  }

  return (
    <Section content={content} />
  )
}

export default Frontend;