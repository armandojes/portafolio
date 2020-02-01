import React from 'react';
import style from './style';
import Container from '../../../../components/container';
import { Link } from 'react-router-dom';
import useSelector from 'hooks/selector';


function Sections () {

  const language = useSelector( state => state.language);

  return (
    <section className={style.wrapper}>
      <Container>


        <div className={`${style.element} ${style.normal}`}>
          <div className={style.picture_layer} style={{backgroundImage: `url(${ASSETS}/pictures/abilities.jpg)`}} />
          <div className={style.description}>
            <h3>{language === 'es' ? 'Habilidades' : 'Skills'}</h3>
            {language === 'es' && (
              <p>
                Maquetacion, Diseño, Prototipo, Desarollo de aplicaciones web interactivas con las ultimas tecnologias, SPA, Apps isomorficas... 
                <Link to="/skills" className={style.link_read_more}>Conocer mas...</Link>
              </p>
            )}
            {language === 'us' && (
              <p>
                Layout, Design, Prototypo, Development of interactive web applications with the latest technologies, SPA, Isomorphic Apps ... 
                <Link to="/skills" className={style.link_read_more}>Read more...</Link>
              </p>
            )}
          </div>
        </div>
        
        <div className={`${style.element} ${style.reverse}`}>
          <div className={style.picture_layer} style={{backgroundImage: `url(${ASSETS}/pictures/proyects.jpg)`}} />
          <div className={style.description}>
          <h3>{language === 'es' ? 'Proyectos' : 'Projects'}</h3>
            {language === 'es' && (
              <p>
                Conoce mis proyectos, Tiendas online, Aplicaciones de escritorio, Utilidades y librerias de codigo... 
                <Link to="/projects" className={style.link_read_more}>Conocer mas...</Link>
              </p>
            )}
            {language === 'us' && (
              <p>     
                Know my projects, Online stores, Desktop applications, Utilities and code libraries ...
                <Link to="/projects" className={style.link_read_more}>Read more...</Link>
              </p>
            )}
          </div>
        </div>
      </Container>
    </section >
  )
}

export default Sections;