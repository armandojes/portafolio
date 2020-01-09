import React from 'react';
import style from './style';

function ReactFetchSsr () {
  return (
    <div className={style.content} style={{backgroundImage: `url(${ASSETS}/icon/react_gray.png)`}}>
      <div className={style.data}>
        <h1>
          react-fetch-ssr
        </h1>
        <p>
        react-fetch-ssr una solución de renderizado de React del lado del servidor, simple, liviana y flexible que abstrae las complejidades del renderizado del lado del servidor. react-fetch-ssr se enfoca únicamente en las peticiones al API, la arquitectura de tu aplicación seguirá estando en tu completo control.
        </p>
        <div className={style.actions_content}>
          <a className={style.actions} href="https://github.com/armandojes/react-fetch-ssr">
            <img src={`${ASSETS}/icon/github.png`} alt=""/>  Github
          </a>
          <a className={style.actions} href="https://github.com/armandojes/react-fetch-ssr">
            <img src={`${ASSETS}/icon/github.png`} alt=""/>  Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReactFetchSsr;