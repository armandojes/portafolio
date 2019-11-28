import React from 'react';
import {useParams} from 'react-router';
import Container from 'components/container';
import style from './style.css';
import Head from './components/head';
import Detail from './components/detail';

function Proyect (){

  const params = useParams();
  console.log(params);
  return (
    <section name="proyects" role="page" className={style.page}>
      <Container className={style.body}>
        <Head  />
        <Detail />
      </Container>
    </section>
  )
}

export default Proyect;