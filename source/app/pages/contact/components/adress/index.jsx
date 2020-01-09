import React from 'react';
import style from './style';


function Adress (props) {
  return (
    <section className={style.body}>
      <div className={style.limiter}>
        <a className={style.row} href="https://github.com/armandojes">
          <img className={style.icon} src={`${ASSETS}/icon/github.png`} />
          Github
        </a>
        <a className={style.row} href="https://www.facebook.com/capitanntripa">
          <img className={style.icon} src={`${ASSETS}/icon/facebook.png`} />
          Facebook
        </a>
        <a className={style.row} href="https://twitter.com/capitanntripa">
          <img className={style.icon} src={`${ASSETS}/icon/twitter.png`} />
          Twitter
        </a>
        <a className={style.row} href="https://wa.me/+529671081479">
          <img className={style.icon} src={`${ASSETS}/icon/whatsapp.png`} />
          +52 9671081479
        </a>
        <div className={style.row}>
          <img className={style.icon} src={`${ASSETS}/icon/email.png`} />
          armandodejesus678@gmail.com
        </div>
      </div>
    </section>
  )
}

export default Adress;