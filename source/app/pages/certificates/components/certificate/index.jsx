import React from 'react';
import style from './style';
import {Link} from 'react-router-dom';

function Certificate(props){

  const src_icon = `${ASSETS}/certificates/${props.id}.webp`;
  
  return (
    <Link className={style.wrapper} to={`/certificate/${props.id}`}>
      <div className={style.container}>
        <img src={src_icon} alt={props.title} />
        <h2>{props.title}</h2>
      </div>
    </Link>
  )
}

export default Certificate;