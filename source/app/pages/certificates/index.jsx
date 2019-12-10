import React from 'react';
import Container from 'components/container';
import style from './style';
import useSelector from 'hooks/selector';
import Certificate from './components/certificate';
import map from 'helpers/map';

function Certificates (props){

  const language = useSelector(state => state.language);
  const certificates = useSelector(state => state.certificates);


  return (
    <section className={style.page}>
      <Container>
        <h1 className={style.title}>{language === 'es' ? 'Certificados' : 'Certificates'}</h1>
        <div className={style.container_list_certificates}>
          {map(certificates, (value, key) => (
            <Certificate title={value} key={key} id={key} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Certificates;