import React from 'react';
import style from './style';
import Container from 'components/container';

function Section (props){
  return (
    <Container className={style.body}>
     <section>
      <img  className={style.picture} src={props.picture}/>
     </section>
      <section className={style.text}>
        {props.children}
      </section>
    </Container>
  )
}

export default Section;