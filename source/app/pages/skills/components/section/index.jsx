import React from 'react';
import style from './style';
import Container from 'components/container';

function Section (props){
  return (
    <Container className={props.reverse ? style.body_reverse : style.body}>
     <section className={props.reverse ? style.text : ''} >
      {props.reverse ? props.children : <img  className={style.picture} src={props.picture}/>}
     </section>
      <section className={!props.reverse ? style.text : ''}>
      {!props.reverse ? props.children : <img  className={style.picture} src={props.picture}/>}
      </section>
    </Container>
  )
}

export default Section;