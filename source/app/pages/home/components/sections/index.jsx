import React from 'react';
import style from './style';
import Container from '../../../../components/container';
import { Link } from 'react-router-dom';

function Sections () {
  return (
    <section className={style.wrapper}>
      <Container>


        <div className={`${style.element} ${style.normal}`}>
          <div className={style.picture_layer} style={{backgroundImage: `url(${ASSETS}/pictures/picture.png)`}} />
          <div className={style.description}>
            <h3>Habilidades</h3>
            <p>
              Maquetacion, Diseño, Prototypo, Desarollo de aplicaciones web interactivas con las ultimas tecnologias, SPA, Apps isomorficas... 
              <Link to="/abilities" className={style.link_read_more}>Conocer mas...</Link>
            </p>
          </div>
        </div>
        
        <div className={`${style.element} ${style.reverse}`}>
          <div className={style.picture_layer} style={{backgroundImage: `url(${ASSETS}/pictures/picture.png)`}} />
          <div className={style.description}>
            <h3>Habilidades</h3>
            <p>
              Maquetacion, Diseño, Prototypo, Desarollo de aplicaciones web interactivas con las ultimas tecnologias, SPA, Apps isomorficas... 
              <Link to="/abilities" className={style.link_read_more}>Conocer mas...</Link>
            </p>
          </div>
        </div>
        
        <div className={`${style.element} ${style.normal}`}>
          <div className={style.picture_layer} style={{backgroundImage: `url(${ASSETS}/pictures/picture.png)`}} />
          <div className={style.description}>
            <h3>Habilidades</h3>
            <p>
              Maquetacion, Diseño, Prototypo, Desarollo de aplicaciones web interactivas con las ultimas tecnologias, SPA, Apps isomorficas... 
              <Link to="/abilities" className={style.link_read_more}>Conocer mas...</Link>
            </p>
          </div>
        </div>
        
        

      </Container>
    </section >
  )
}

export default Sections;