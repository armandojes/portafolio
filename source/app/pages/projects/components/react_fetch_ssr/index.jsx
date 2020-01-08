import React from 'react';
import style from './style';

function ReactFetchSsr () {
  return (
    <div className={style.content}>
      <div className={style.data}>
        <div>
          react-fetch-ssr
        </div>
        <p>
        react-fetch-ssr una solución de renderizado de React del lado del servidor, simple, liviana y flexible que abstrae las complejidades del renderizado del lado del servidor. react-fetch-ssr se enfoca únicamente en las peticiones al API, la arquitectura de tu aplicación seguirá estando en tu completo control.
        </p>
        <div className={style.actions_content}>
          <a href="https://github.com/armandojes/react-fetch-ssr">
            github
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReactFetchSsr;