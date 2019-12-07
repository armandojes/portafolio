import React from 'react';
import style from './style';
import { Link } from 'react-router-dom'


function Project (props){
  return (
    <Link to={`project/${props.url}`} name="component_project" className={style.container}>
      <img src={props.picture} />
      <div className={style.data_container}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </Link>
  )
}

export default Project;