import React from 'react';
import style from './style';
import Container from 'components/container';
import Tools from './components/tools'
import Languages from './components/languages'
import Frontend from './components/frontend'
import Backend from './components/backend'
import Sowtware from './components/software'
import Oters from './components/others'
import Language from './components/language'

function Details (){
  return (
    <section className={style.wrapper}>
      <Container className={style.body}>
        <Tools />
        <Languages />
        <Frontend />
        <Backend />
        <Sowtware />
        <Oters />
        <Language />
      </Container>
    </section>
  )
}

export default Details