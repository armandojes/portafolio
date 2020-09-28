import cover from '../../assets/indie.png'
import pic1 from '../../assets/indie_1.png'
import pic2 from '../../assets/indie_2.png'
import pic3 from '../../assets/indie_3.png'
import pic4 from '../../assets/indie_4.png'


const IndieShows = {
  url: 'https://indieshow.com.mx/',
  picture: cover,
  title: {es: 'Indie Shows', us: 'Indie Shows'},
  description: {
    es: 'Indie Show es una productora de entretenimiento nacida en 2013, creada a partir de la necesidad de brindar espacios de exposición a artistas independientes, a través de la producción y promotoría de espectáculos de calidad.',
    us: 'Indie Show is an entertainment production company born in 2013, created from the need to provide exhibition spaces to independent artists, through the production and promotion of quality shows.'
  },
  pictures: [pic1, pic2, pic3, pic4],
  objetive: {
    es: 'Formar parte de la revolución de entretenimiento digital, Indie Show lanza una plataforma de streaming que ofrece la posibilidad de llevar tu espectáculo a cualquier lugar.',
    us: 'Being part of the digital entertainment revolution, Indie Show launches a streaming platform that offers the ability to take your show anywhere.'
  },
  details: [
    {es: 'Interfaces construido con React y Material-UI', us: 'Interfaces built with React and Material-UI'},
    {es: 'Soporte para multiples dispositivos (Responsivo)', us: 'Support for multiple devices (Responsive)'},
    {es: 'Desarrollo basado en componentes', us: 'Component Based Development'},
    {es: 'Ultima version de Javascript transpilado con babel', us: 'Latest version of JavaScript transpile with babel'},
    {es: 'Arquitectura construdo con microservicios', us: 'Architecture built with microservices'},
    {es: 'Base de datos en firebase', us: 'Database in firebase'},
    {es: 'Notificaciones en tiempo real', us: 'Real time notifications'},
  ],
  languages: [
    'react',
    'react-router',
    'javascript',
    'css',
    'html',
    'json',
    'materialui',
    'jwt',
    'typescript',
    'firebase',
    'node',
    'redux'
  ]
}

export default IndieShows;