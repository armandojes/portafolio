import React from 'react';
import style from './style';



function Head (props){
  return (
    <section name="head" className={style.head_content}>
      <img src={props.picture} className={style.picture}/>
      <div className={style.data}>
        <h2 className={style.title}>{props.title}</h2>
        <p>{props.description}</p>
        <div className={style.button_container}>
          <a target="_blank" className={style.button} href={props.github}>Github</a>
          <a target="_blank" className={style.button} href={props.url}>Sitio web</a>
        </div>
      </div>
    </section>
  )
}

export default Head;