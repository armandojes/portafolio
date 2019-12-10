import React from 'react';
import Container from 'components/container';
import style from './style';
import useSelector from 'hooks/selector';

function Certificates (props){

  const language = useSelector(state => state.language);

  return (
    <section className={style.page}>
      <Container>
        <h1 className={style.title}>{language === 'es' ? 'Certificados' : 'Certificates'}</h1>
        <div className={style.container_list_certificates}>
        
        </div>
      </Container>
    </section>
  )
}

export default Certificates;