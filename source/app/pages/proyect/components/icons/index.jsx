import React from 'react';
import style from './style';
import transform_url from 'helpers/transform_url';

function Icons (props){
  return (
    <section>
      <h2>Lenjuages y librerias</h2>
      <div className={style.icons_container_list}>
        {props.languages.map((icon) => (
          <div className={style.icon_wrapper} key={icon} >
            <div className={style.icon_content} >
              <img src={`${ASSETS}/tecnologies/${transform_url(icon)}.png`} alt={`${icon}.png`}/>
              {icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Icons;