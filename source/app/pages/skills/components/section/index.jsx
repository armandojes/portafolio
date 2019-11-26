import React from 'react';
import style from './style';
import Container from 'components/container';

//props.className
//para aplicarle estilos al imagen


function Section (props){
  return (
    <Container className={props.reverse ? style.body_reverse : style.body}>
     <section className={props.reverse ? style.text : ''} >
      {props.reverse ? props.children : <img  className={`${style.picture} ${props.className || ''}`} src={props.picture}/>}
     </section>
      <section className={!props.reverse ? style.text : ''}>
      {!props.reverse ? props.children : <img  className={`${style.picture} ${props.className || ''}`} src={props.picture}/>}
      </section>
    </Container>
  )
}

export default Section;