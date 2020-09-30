import React from 'react';
import Container from '../../components/container';
import style from './style';
import useSelector from 'hooks/selector';
import Form from './components/form'
import Adress from './components/adress'

function Contact (props){
  const language = useSelector(state => state.language);
  const stylePage = {
    minHeight: '86vh',
    display: 'flex',
  }


  return (
    <div className={style.wrapper} id="contact" style={props.page ? stylePage : {}}>
      <Container className={style.body}>
        <div className={style.box}>
          <div className={style.header_box}>
            <h3>{language === 'es' ? 'Vamos a creare algo juntos' : 'let\'s create something together'}</h3>
            {language === 'es' && (
              <p>¿Tienes grandes ideas para la transformación digital de tu empresa? Me encantaria ser parte de ella</p>
            )}          
            {language === 'us' && (
              <p>Do you have great ideas for the digital transformation of your company? I would love to be part of it</p>
            )}
            <div className={style.container_sections}>
              <Form />
              <Adress />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact;