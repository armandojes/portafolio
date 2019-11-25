import React from 'react';
import style from './style';
import Container from 'components/container';
import Tools from './components/tools'
import Languages from './components/languages'

function Details (){
  return (
    <section className={style.wrapper}>
      <Container className={style.body}>
        <Tools />
        <Languages />
      </Container>
    </section>
  )
}

export default Details