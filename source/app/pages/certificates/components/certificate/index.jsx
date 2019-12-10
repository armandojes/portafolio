import React from 'react';
import style from './style';

function Certificate(props){

  const src_icon = `${ASSETS}/certificates/${props.id}.webp`;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <img src={src_icon} alt={props.title} />
        <h2>{props.title}</h2>
      </div>
    </div>
  )
}

export default Certificate;