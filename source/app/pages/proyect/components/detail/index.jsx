import React, {Fragment} from 'react';
import style from './style';
import useSelector from 'hooks/selector';


function Details (props){

  const language = useSelector(state => state.language);

  return (
    <Fragment>
      <div className={style.box}>
        <h2 className={style.title}>Objetivos</h2>
       <p>
       Uno de mis hobbies es leer artículos en el blog de Platzi, y he notado que a veces toma hasta varios segundos para avanzar al siguiente listado de posts y me pareció desafiante y divertido crear una copia casi exacta (con ciertos cambios) para solucionar este problema… los cambios más notables es el Scroll infinito y ejecución universal (isomórfica). 
       </p>
      </div>
      <div className={style.box}>
        <h2 className={style.title}>Detalles tecnicos</h2>
        <ul>
          <li className={style.list_languages_and_libraries}>
            <img src={`${ASSETS}/icon/check.png`} className={style.icon_list_check} alt=""/>
            Interfaces contruido con ReactJS</li>             
          <li className={style.list_languages_and_libraries}>
            <img src={`${ASSETS}/icon/check.png`} className={style.icon_list_check} alt=""/>
            Manejo de estado global e inmutable con ReduxJs</li>
          <li className={style.list_languages_and_libraries}>
            <img src={`${ASSETS}/icon/check.png`} className={style.icon_list_check} alt=""/>
            Soporte para multiples dispositivos (Responsivo)</li>
          <li className={style.list_languages_and_libraries}>
            <img src={`${ASSETS}/icon/check.png`} className={style.icon_list_check} alt=""/>
            Render en el lado del cliente y en el lado del servidor (isomorfica)</li>
          <li className={style.list_languages_and_libraries}>
            <img src={`${ASSETS}/icon/check.png`} className={style.icon_list_check} alt=""/>
            Desarrollo basado en componentes</li>
          <li className={style.list_languages_and_libraries}>
            <img src={`${ASSETS}/icon/check.png`} className={style.icon_list_check} alt=""/>
            Ultima vercion de Javascript transpilado con babel</li>
        </ul>
      </div>
      <div className={style.box}>

      </div>
    </Fragment>
  )
}


export default Details
