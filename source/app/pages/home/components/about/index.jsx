import React, { Fragment } from 'react';
import style from './style';
import Container from '../../../../components/container';
import useSelector from 'hooks/selector';


function About (){

  const language = useSelector(state => state.language);

  return (
    <section className={style.wrapp} style={{backgroundImage: `url(${ASSETS}/pictures/about.png)`}}>
      <Container className={style.body}>
        {language === 'es' && (
          <article>
            <h2>Hola un gusto conocerte</h2>
            <p>Mi nombre es Armando De Jesús, actualmente Tengo 23 años y soy de San Cristóbal de las Casas, Chiapas – México. </p>
            <p>Soy un amante de los códigos y del mundo tecnológico, tanto que escribir código se ha convertido en uno de mis pasatiempos favoritos junto con los deportes y los videojuegos. </p>
            <p>Desde que era un niño siempre me ha impresionado el internet, y me preguntaba a mí mismo ¿cómo funciona esto?, ¿cómo puedo crear cosas impresionantes como estas?. Mi gran curiosidad me ha llevado a dominar varios lenguajes de programación, a dominar arquitecturas de software, paradigmas de programación, Frameworks y librerías. </p>
            <p>Me gustan los retos difíciles, si tienes uno me gustaría formar parte de el.  </p>
          </article> 
        )}
        
        {language === 'us' && (
          <article>
            <h2>Hello, nice to meet you</h2>
            <p>My name is Armando De Jesús, I am currently 23 years old and I am from San Cristóbal de las Casas, Chiapas - Mexico.</p>
            <p>I am a lover of codes and the technological world, so much so that writing code has become one of my favorite hobbies along with sports and video games.</p>
            <p>Since I was a child I have always been impressed by the internet, and I asked myself how does this work? How can I create impressive things like these? My great curiosity has led me to master several programming languages, to master software architectures, programming paradigms, Frameworks and libraries.</p>
            <p>I like difficult challenges, if you have one I would like to be part of it.</p>
          </article> 
        )}
      </Container>
    </section>
  )
}

export default About;