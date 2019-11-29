import React from 'react';
import style from './style';
import useSelector from 'hooks/selector';


function Gallery (props){

  const language = useSelector(state => state.language);

  return (
    <section>
      <h2>{language === 'es' ? 'Galeria' : 'Gallery'}</h2>
      <div className={style.gallery_list_container}>
        {props.pictures.map((picture, index) => (
          <div className={style.box_content} key={index}>
            <div className={style.picture_content} >
              <img src={picture.picture} />
            </div>
            <p>{picture.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery;