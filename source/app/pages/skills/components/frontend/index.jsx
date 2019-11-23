import React from 'react';
import Section from '../section';
import useSelector from 'hooks/selector';


function Frontend (){
  const language = useSelector(state => state.language);


  if (language === 'us') return (
    <Section picture={`${ASSETS}/pictures/frontend.png`} reverse={true}>
      <h2>Frontend developer</h2>
      <p> Design, layout and development of interactive and responsive Frontend applications.</p>
      <p> Agile development based on components, integration of render on the server side and on the client side (isomorphic APPS) with the latest technology such as React, redux and Vue.</p>
    </Section>
  )

  if (language === 'es') return (
    <Section picture={`${ASSETS}/pictures/frontend.png`} reverse={true}>
      <h2> Desarrollador Frontend </h2>
      <p> Diseño, maquetación y desarrollo de aplicaciones Frontend interactivas y responsivos.</p>
      <p> Desarrollo ágil basado en componentes, integración de render en el lado del servidor y en el lado del cliente (APPS isomórficas) con las ultimas tecnológicas como React, redux y Vue.</p>
    </Section>
  );

  return null
}

export default Frontend;