import cover from '../../assets/cruz.png'
import pic1 from '../../assets/cruz_1.png'
import pic2 from '../../assets/cruz_2.png'
import pic3 from '../../assets/cruz_3.png'
import pic4 from '../../assets/cruz_4.png'

const Witideal = {
  url: 'https://santacruz.vercel.app/nosotros',
  picture: cover,
  title: {es: 'Panaderia Santa Cruz', us: 'Santa Cruz Bakery'},
  description: {
    es: '(SPA) E-commerce dedicado a la comercializacion de productos para Panificación y catalogo de recetas relacionadas a panaderia',
    us: '(SPA) E-commerce dedicated to the commercialization of products for Bakery and catalog of recipes related to bakery'
  },
  pictures: [pic1, pic2, pic3, pic4],
  objetive: {
    es: 'Contribuir al desarrollo y crecimiento de nuestros clientes y personal proporcionando productos de alta calidad, servicio oportuno y asesoría eficaz',
    us: 'Contribute to the development and growth of our clients and staff by providing high quality products, timely service and effective advice.'
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

export default Witideal;