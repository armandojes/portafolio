import React from 'react';
import style from './style';

function Title (props){
  return (
    <h2 className={style.title}>{props.children}</h2>
  )
}

export default Title;