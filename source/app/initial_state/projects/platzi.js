const platzi_blog = {
  picture: `${ASSETS}/projects/platzi_blog.png`,
  title: {es: 'Platzi Blog', us: 'Platzi Blog'},
  description: {
    es: 'Esta aplicación surge como un ejercicio de programación, es una réplica exacta (con ciertos cambios intencionales) del sistema de blog de Platzi.',
    us: 'This application emerges as a programming exercise, it is an exact replica (with certain intentional changes) of the Platzi blog system.'
  },
  Characteristics: [
    {
      title: {es: 'Scroll infinito', us: 'Infinite scroll'},
      content: {
        es: 'Navegar entre paginas en el blog de platzi a veces toma hasta varios segundos. Desde mi perspectiva la mejor forma de solucionarlo es con una tecnica llamada "carga infinita" o "scroll infinito" de modo que los usuarios solo tienen que desplazarse hacia abajo para cargar más contenido.',
        us: 'Browsing between pages on the platzi blog sometimes takes up to several seconds. From my perspective, the best way to solve it is with a technique called "infinite load" or "infinite scroll" so that users only have to scroll down to load more content.',
      }
    },
    {
      title: {es: 'Aplicacion isomorfica', us: 'Isomorphic application'},
      content: {
        es: 'Para mejorar aún más la usabilidad de la aplicación integramos render en el lado del servidor, de modo que la primera solicitud es procesada por el servidor y las solicitudes posteriores serán procesadas en el lado del cliente de esta manera nuestros usuarios percibirán una mayor velocidad de carga y navegación',
        us: 'To further improve the usability of the application we integrate render on the server side, so that the first request is processed by the server and subsequent requests will be processed on the client side in this way our users will perceive a higher loading speed and navigation.',
      }
    },
  ],
  pictures: [
    `${ASSETS}/projects/platzi1.png`,
    `${ASSETS}/projects/platzi2.png`,
    `${ASSETS}/projects/platzi3.png`,
  ],
}

export default platzi_blog;