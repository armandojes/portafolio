import React, { Fragment } from 'react';
import style from './style';

function Gallery (props){
  return (
    <section>
      <h2>Galleria</h2>
      <div>
        {props.pictures.map((picture, index ) => (
          <img className={style.picture} src={picture} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Gallery