import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function Tools (){

  const language = useSelector(state => state.language);
  
  const content = {
    title: 'Backend',
    list: [
      {icon: `${ASSETS}/icon/node.png`, text: 'Node Js'},
      {icon: `${ASSETS}/icon/nextjs.png`, text: 'Next Js'},
      {icon: `${ASSETS}/icon/api.png`, text: 'API Rest'},   
      {icon: `${ASSETS}/icon/graphql.png`, text: 'GraphQL'},
      {icon: `${ASSETS}/icon/jwt.png`, text: 'Json Web Token'},
      {icon: `${ASSETS}/icon/wordpress.png`, text: 'Wordpress'},
    ],
  }

  return (
    <Section content={content} />
  )
}

export default Tools;