import React from 'react';
import style from './style';



function Head (props){
  return (
    <section name="head" className={style.head_content}>
      <img src={props.picture} className={style.picture}/>
      <div className={style.data}>
        <h2 className={style.title}>Platzi Blog</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati doloremque nihil voluptatem inventore ad magni sed hic delectus unde? Iste repellat harum saepe nisi nulla nostrum doloremque omnis voluptate numquam!
        </p>
        <div className={style.button_container}>
          <a className={style.button} href="http://github.com">Github</a>
          <a className={style.button} href="http://github.com">Sitio web</a>
        </div>
      </div>
    </section>
  )
}

export default Head;