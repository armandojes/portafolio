import React from 'react';
// import style from './style';
import Section from '../section';

function Backend (){
  return (
    <Section picture={`${ASSETS}/pictures/backend.png`} reverse={true}>
      <h2> Backend developer </h2>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem maiores quod laudantium delectus, perspiciatis nulla porro saepe assumenda corrupti consectetur quisquam sint incidunt! Quaerat accusamus quibusdam consequatur et sed dolorem?</p>
    </Section>
  )
}

export default Backend;