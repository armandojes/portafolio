import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function Tools (){

  const language = useSelector(state => state.language);
  
  const content = {
    title: language === 'es' ? 'Herramientas' : 'Tools',
    list: [
      {icon: `${ASSETS}/icon/webpack.png`, text: 'Webpack'},
      {icon: `${ASSETS}/icon/babel.png`, text: 'Babel'},
      {icon: `${ASSETS}/icon/rollup.png`, text: 'Rollup'},
      {icon: `${ASSETS}/icon/browserify.png`, text: 'Browserify'},
    ],
  }

  return (
    <Section content={content} />
  )
}

export default Tools;