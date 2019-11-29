import React, {Fragment} from 'react';
import style from './style';
import useSelector from 'hooks/selector';


function Details (props){

  const language = useSelector(state => state.language);

  return (
    <section className={style.content}>
      <div className={style.box}>
        <h2 className={style.title}>{language === 'es' ? 'Caracteristicas' : 'Characteristics'}</h2>
        {props.characteristics.map(sentence => (
          <Fragment>
            <p>
              {sentence.title && (<Fragment>{sentence.title}: <br /></Fragment>)}
              {sentence.content}
            </p>
          </Fragment>
        ))}
      </div>
    </section>
  )
}


export default Details
