import React from 'react';
import style from './style';
import transform_url from 'helpers/transform_url';
import useSelector from 'hooks/selector';


function Icons (props){

  const language = useSelector (state => state.language);

  return (
    <section>
      <h2>{language === 'es' ? 'Lenguajes y librerias' : 'Languages ​​and libraries'}</h2>
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