import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function NodeJs (){

  const language = useSelector(state => state.language);

  if (language === 'es') return (
    <Section picture={`${ASSETS}/pictures/graphql.png`} reverse={true}>
      <h2>GraphQL </h2>
      <p>Desarrollo de aplicaciones agiles y dinamias con interfaces de comunicación GraphQL, API sin versiones, lenguaje de consultas estructurado, simple y descriptivo.</p>
      <p>Comunicación eficiente entre múltiples dispositivos móviles, aplicaciones web, aplicaciones nativas de escritorio y más… </p>
    </Section>
  )

  return (
    <Section picture={`${ASSETS}/pictures/graphql.png`} reverse={true}>
      <h2>GraphQL </h2>
      <p>Agile and dynamic application development with GraphQL communication interfaces, API without versions, structured, simple and descriptive query language.</p>
      <p>Efficient communication between multiple mobile devices, web applications, native desktop applications and more ...</p>
    </Section>
  )
}

export default NodeJs;