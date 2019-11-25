import React from 'react';
import style from './style';

function Section (props){
  return (
    <div className={style.wrapper}>
      <section className={style.content}>
      <h2>Herramientas</h2>
      <ul>
        <li>
          <img src={`${ASSETS}/icon/redux.png`} />
          <div>Redux Js</div>
        </li>
        <li>
          <img src={`${ASSETS}/icon/redux.png`} />
          <div>webpack Js</div>
        </li>
        <li>
          <img src={`${ASSETS}/icon/redux.png`} />
          <div>Babel Js</div>
        </li>
        <li>
          <img src={`${ASSETS}/icon/redux.png`} />
          <div>RollUp Js</div>
        </li>
        
      </ul>
    </section>  
    </div>
  )
}

export default Section