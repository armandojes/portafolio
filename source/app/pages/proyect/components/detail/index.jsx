import React from 'react';
import style from './style';

function Details (props){
  return (
    <section className={style.content}>
      <div className={style.box}>
        <h2 className={style.title}>Caracteristicas</h2>
        <p> 
          Scroll infinito: <br />
          Navegar entre paginas en el blog de platzi a veces toma hasta varios segundos. Desde mi perspectiva la mejor forma de solucionarlo es con una tecnica llamada "carga infinita" o "scroll infinito" de modo que los usuarios solo tienen que desplazarse hacia abajo para cargar más contenido.
        </p>
        <p> 
          Aplicacion isomorfica: <br />
          Para mejorar aún más la usabilidad de la aplicación integramos render en el lado del servidor, de modo que la primera solicitud es procesada por el servidor y las solicitudes posteriores serán procesadas en el lado del cliente de esta manera nuestros usuarios percibirán una mayor velocidad de carga y navegación
        </p>
      </div>
      <div className={style.box}>
        <h2 className={style.title}>Galeria</h2>
        <div className={style.gallery_content}>
          <div className={style.picture_wrapper}>
            <img className={style.ícture} src="https://www.nascenia.com/wp-content/uploads/2018/04/React-JS-600x600.jpg" />
          </div>
          <div className={style.picture_wrapper}>
            <img className={style.ícture} src="https://www.nascenia.com/wp-content/uploads/2018/04/React-JS-600x600.jpg" />
          </div>
          <div className={style.picture_wrapper}>
            <img className={style.ícture} src="https://www.nascenia.com/wp-content/uploads/2018/04/React-JS-600x600.jpg" />
          </div>
          <div className={style.picture_wrapper}>
            <img className={style.ícture} src="https://www.nascenia.com/wp-content/uploads/2018/04/React-JS-600x600.jpg" />
          </div>
          <div className={style.picture_wrapper}>
            <img className={style.ícture} src="https://www.nascenia.com/wp-content/uploads/2018/04/React-JS-600x600.jpg" />
          </div>
          <div className={style.picture_wrapper}>
            <img className={style.ícture} src="https://www.nascenia.com/wp-content/uploads/2018/04/React-JS-600x600.jpg" />
          </div>
          <div className={style.picture_wrapper}>
            <img className={style.ícture} src="https://www.nascenia.com/wp-content/uploads/2018/04/React-JS-600x600.jpg" />
          </div>
          <div className={style.picture_wrapper}>
            <img className={style.ícture} src="https://www.nascenia.com/wp-content/uploads/2018/04/React-JS-600x600.jpg" />
          </div>
          
        </div>
      </div>
    </section>
  )
}


export default Details
