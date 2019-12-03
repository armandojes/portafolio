import React from 'react';
import style from './style';

const icons = [
  'html',
  'javascript',
  'react',
  'redux',
  'css',
  'json',
];

function Icons (props){
  return (
    <section>
      <h2>Lenjuages y librerias</h2>
      <div className={style.icons_container_list}>
        {icons.map((icon) => (
          <div className={style.icon_wrapper} key={icon} >
            <div className={style.icon_content} >
              <img src={`${ASSETS}/tecnologies/${icon}.png`} alt={`${icon}.png`}/>
              {icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Icons;