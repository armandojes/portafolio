import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function Software (){

  const language = useSelector(state => state.language);
  
  const content = {
    title: language === 'es' ? 'Software' : 'Software',
    list: [
      {icon: `${ASSETS}/icon/git.png`, text: 'Git y Github'},
      {icon: `${ASSETS}/icon/photoshop.png`, text: 'Adobe Photoshop'},
      {icon: `${ASSETS}/icon/afther_effects.png`, text: 'Adobe after Effects'},
      {icon: `${ASSETS}/icon/xd.png`, text: 'Adobe Experience Design'},
      {icon: `${ASSETS}/icon/sony_vegas.png`, text: 'Sony Vegas'},
    ],
  }

  return (
    <Section content={content} />
  )
}

export default Software;