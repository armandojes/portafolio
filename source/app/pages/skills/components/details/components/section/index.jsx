import React from 'react';
import style from './style';

function Section (props){

  const {title, list} = props.content;

  return (
    <div className={style.wrapper}>
      <section className={style.content}>
        <h2>{title}</h2>
        <ul>
          {list.map( item => (
            <li key={item.text}>
              <img src={item.icon} />
              <div>{item.text}</div>
            </li>
          ))}
        </ul>
      </section>  
    </div>
  )
}

export default Section