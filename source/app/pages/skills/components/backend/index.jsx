import React from 'react';
import useSelector from 'hooks/selector';
import Section from '../section';

function Backend (){

  const language = useSelector(state => state.language);

  return (
    <Section picture={`${ASSETS}/pictures/backend.png`} >
      <h2> {language === 'es' ? 'Desarrollador Backend' : 'Backend developer'} </h2>
      <p>{language === 'es' 
        ? 'Diseño y desarrollo de cualquier aplicación Backend, servicios API REST, lógica de negocio escalables y a medida, deploy a servidores y manejo de dominios.'
        : 'Design and development of any Backend application, API REST services, scalable and custom business logic, server deployments and domain management.'
      }</p>
    </Section>
  )
}

export default Backend;