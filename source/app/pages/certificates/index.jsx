import React, {useState} from 'react';
import Container from 'components/container';
import style from './style';
import useSelector from 'hooks/selector';
import Certificate from './components/certificate';
import Display from './components/display';
import map from 'helpers/map';
import { useParams } from 'react-router-dom';

function Certificates (props){

  const language = useSelector(state => state.language);
  const certificates = useSelector(state => state.certificates);
  const { id = null } = useParams();
  
  return (
    <section className={style.page}>
      {id && (<Display id={id}/>)}
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