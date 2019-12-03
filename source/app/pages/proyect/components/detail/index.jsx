import React, {Fragment} from 'react';
import style from './style';
import useSelector from 'hooks/selector';


function Details (props){

  const language = useSelector(state => state.language);

  return (
    <Fragment>
      <section className={style.box}>
        <h2 className={style.title}>{language === 'es' ? 'Objetivo' : 'Objetive'}</h2>
        <p>{props.objetive}</p>
      </section>

      <section className={style.box}>
        <h2 className={style.title}>{language === 'es' ? 'Detalles tecnicos' : 'Technical details'}</h2>
        <ul>
          {props.details.map( detail => (
            <li className={style.list_languages_and_libraries} key={detail}>
              <img src={`${ASSETS}/icon/check.png`} className={style.icon_list_check} />
              {detail}
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  )
}


export default Details
