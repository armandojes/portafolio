import React from 'react';
import style from './style';

function Form (props) {
  return (
    <section>
      <div className={style.body}>
        <form className={style.form}>
          <input type="text" placeholder="Correo electronico" />
          <textarea placeholder="mensaje"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Form;