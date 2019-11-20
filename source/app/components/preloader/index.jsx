import React from 'react';
import style from './style';

function Preloader (){
  return (
    <div className={style.spinner_wraper}>
      <div className={style.spinner}>
        <div></div>
        <div><div /></div>
      </div>
    </div>
  )
}

export default Preloader;