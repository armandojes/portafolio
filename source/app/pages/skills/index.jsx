import React from 'react';
import style from './style';
import Landing from './components/landing';
import Backend from './components/backend';
import Frontend from './components/frontend';
import NodeJs from './components/node';
import Graphql from './components/graphql';


function Skills (){
  return (
    <section name="skills" role="page">
      <Landing />
      <Backend />
      <Frontend />
      <NodeJs />
      <Graphql />
    </section>
  )
}


export default Skills;