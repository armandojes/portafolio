import React from 'react';
import style from './style';
import Landing from './components/landing';
import Backend from './components/backend';
import Frontend from './components/frontend';
import NodeJs from './components/node';
import Graphql from './components/graphql';
import Details from './components/details';


function Skills (){
  return (
    <section name="skills" role="page" className={style.page} style={{backgroundImage: `url(${ASSETS}/pictures/main.png)`}}>
      <Landing />
      <Backend />
      <Frontend />
      <NodeJs />
      <Graphql />
      <Details />
    </section>
  )
}


export default Skills;