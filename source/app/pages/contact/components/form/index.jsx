import React from 'react';
import style from './style';
import useSelector from 'hooks/selector';

function Form (props) {

  const language = useSelector(state => state.language)

  return (
    <section>
      <div className={style.body}>
        <form className={style.form}>
          <input type="text" placeholder={language === 'es' ? 'Correo electronico' : 'Email'} />
          <textarea placeholder={language === 'es' ? 'Mensaje' : 'message'}/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Form;