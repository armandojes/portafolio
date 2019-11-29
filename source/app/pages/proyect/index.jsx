import React from 'react';
import {useParams} from 'react-router';
import transform_url from 'helpers/transform_url';
import useSelector from 'hooks/selector';

import Container from 'components/container';
import style from './style.css';
import Head from './components/head';
import Detail from './components/detail';



function Proyect (){

  const {url} = useParams();
  const data = useSelector(state => state.projects[transform_url(url)]);
  console.log(data)

  if (!data) return 'error 404'

  return (
    <section name="proyects" role="page" className={style.page}>
      <Container className={style.body}>
        <Head  
          picture={data.picture}
          description={data.description}
          title={data.title}
        />
        <Detail 
          characteristics={data.characteristics}
        />
      </Container>
    </section>
  )
}

export default Proyect;