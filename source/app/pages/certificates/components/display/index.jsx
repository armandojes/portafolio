import React from 'react';
import style from './style';
import {useHistory} from 'react-router-dom';

function Display (props){

  const {goBack} =  useHistory();
 
  return (
    <div className={style.content_float} onClick={(e) => {goBack()}}>
      <div className={style.box}>
        <div className={style.close_button}>X</div>
        <img src={`${ASSETS}/certificates/dip_${props.id}.png`} />
      </div>
    </div>
  )
}

export default Display;