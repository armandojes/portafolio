import React from 'react';
import style from './style';
import useSelector from 'hooks/selector';


function Gallery (props){

  const language = useSelector(state => state.language);

  return (
    <section className={style.body}>
      {props.pictures.map((picture, index) => (
        <section className={style.box} key={index} >
          <div className={style.picture_container}>
            <img src={picture.picture} className={style.picture}/>
          </div>
          <div className={style.text_container}>
            {picture.text}
          </div>
        </section>
      ))}
    </section>
  )
}

export default Gallery;