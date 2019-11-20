import React, { useState } from 'react';
import style from './style';
import useSelector from 'hooks/selector';
import Preloader from 'components/preloader';

function Form (props) {

  const language = useSelector(state => state.language)
  const [message, set_message] = useState('');
  const [email, set_email] = useState('');
  const [state, set_state] = useState('loading');  //estados [loading, success, error, form]

  return (
    <section>
      <div className={style.body}>
        {state === 'form' && (
          <form className={style.form}>
            <input 
              type="text" 
              placeholder={language === 'es' ? 'Correo electronico' : 'Email'} 
              value={email}
              onChange={e => set_email(e.target.value)}
            />
            <textarea 
              placeholder={language === 'es' ? 'Mensaje' : 'Message'}
              value={message}
              onChange={ e => set_message(e.target.value)} 
            />
            <button type="submit">Enviar</button>
          </form>
        )}
        {state === 'loading' && (
          <Preloader />
        )}
      </div>
    </section>
  )
}

export default Form;