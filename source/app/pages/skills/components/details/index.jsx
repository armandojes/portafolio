import React from 'react';
import style from './style';
import Container from 'components/container';
import Section from './components/section'

function Details (){
  return (
    <section className={style.wrapper}>
      <Container className={style.body}>
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </Container>
    </section>
  )
}

export default Details