import React, { Fragment } from 'react';
import style from './style';
import Container from 'components/container';


function Landing (){
  return (
    <div className={style.wrapper} style={{backgroundImage: `url(${ASSETS}/pictures/bg.gif)`}}>
      <Container>
        <div className={style.body}>
          <h2 className={style.title}>FullStack Javascript</h2>
          <img src={`${ASSETS}/pictures/javascript.png`} className={style.picture}/>
        </div>
      </Container>
    </div>
  )
}

export default Landing;