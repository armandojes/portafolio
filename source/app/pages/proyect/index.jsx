import React from 'react';
import Container from 'components/container';
import style from './style.css';
import Head from './components/head';
import Detail from './components/detail';

const picture = `${ASSETS}/proyects/platzi.png`;

function Proyect (){
  return (
    <section name="proyects" role="page" className={style.page}>
      <Container className={style.body}>
        <Head picture={picture} />
        <Detail picture={picture} />
      </Container>
    </section>
  )
}

export default Proyect;