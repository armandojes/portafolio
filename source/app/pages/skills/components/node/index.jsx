import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';
import style from './style';


function NodeJs (){
  
  const language = useSelector(state => state.language);

  return (

    <Section picture={`${ASSETS}/pictures/node_js.png`} className={style.node}>
      <h2> Node Js </h2>
      <p>{language === 'es'
        ? 'Desarrollo de aplicaciones eficientes con JavaScript del lado del servidor utilizando nodeJS como motor de ejecución, interfaces de comunicación Rest, GraphQL y aplicaciones en tiempo real con socketIo.'
        : 'Development of efficient applications with server-side JavaScript using nodeJS as the execution engine, Rest communication interfaces, GraphQL and real-time applications with socket.'
      }</p>
    </Section>
  )
}

export default NodeJs;