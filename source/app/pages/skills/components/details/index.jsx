import React from 'react';
import style from './style';
import Container from 'components/container';
import Tools from './components/tools'

function Details (){
  return (
    <section className={style.wrapper}>
      <Container className={style.body}>
        <Tools />
      </Container>
    </section>
  )
}

export default Details