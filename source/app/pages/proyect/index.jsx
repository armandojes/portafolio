import React from 'react';
import {useParams} from 'react-router';
import transform_url from 'helpers/transform_url';
import useSelector from 'hooks/selector';

import Container from 'components/container';
import style from './style.css';
import Head from './components/head';
import Detail from './components/detail';
import Gallery from './components/gallery';



function Proyect (){

  const {url} = useParams();
  const data = useSelector(state => state.projects[transform_url(url)]);

  if (!data) return 'error 404'

  return (
    <section name="proyects" role="page" className={style.page}>
      <Container className={style.body}>
        <Head  
          picture={data.picture}
          description={data.description}
          title={data.title}
          github={data.github}
          url={data.url}
        />
        <div className={style.content_details_and_gallery}>
          <Detail 
            characteristics={data.characteristics}
          />
          <Gallery 
            pictures={data.pictures}
          />
        </div>
      </Container>
    </section>
  )
}

export default Proyect;