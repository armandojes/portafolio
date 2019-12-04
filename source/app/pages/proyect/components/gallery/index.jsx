import React, { Fragment } from 'react';
import style from './style';
import useSelector from 'hooks/selector';


function Gallery (props){

  const language = useSelector(state => state.language);

  return (
    <section>
      <h2>{language === 'es' ? 'Galeria' : 'Gallery'}</h2>
      <div>
        {props.pictures.map((picture, index ) => (
          <img className={style.picture} src={picture} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Gallery