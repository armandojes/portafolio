import cover from '../../assets/asadores.png'
import pic1 from '../../assets/asadores_1.png'
import pic2 from '../../assets/asadores_2.png'
import pic3 from '../../assets/asadores_3.png'
import pic4 from '../../assets/asadores_4.png'
import pic5 from '../../assets/asadores_5.png'

const Asadores = {
  url: 'https://asadores.vercel.app/',
  picture: cover,
  title: {es: 'Asadores del norte', us: 'Northern steakhouses'},
  description: {
    es: 'SPA. E-commerce dedicada a la comercializacion de asadores y accesorios. Sitio web altamente interactiva y personalizable.',
    us: 'SPA. E-commerce dedicated to the commercialization of grills and accessories. Highly interactive and customizable website.'
  },
  pictures: [pic1, pic2, pic3, pic4, pic5],
  objetive: {
    es: 'Formar parte de la transformacion digital, ofrecer servicios a ciudades lejanas donde la empresa no tiene presencia',
    us: 'Be part of the digital transformation, offer services to distant cities where the company does not have a presence'
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
    'node'
  ]
}

export default Asadores;