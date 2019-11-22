import React from 'react';
import style from './style';

function Text (props){
  return (
    <div className={style.text}>
      {props.children}
    </div>
  )
}

export default Text;