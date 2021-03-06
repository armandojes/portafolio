import React, {useEffect} from 'react';
import style from './style';
import useSelector from 'hooks/selector';
import Container from 'components/container';
import Project from './components/project';
import ReactFetchSsr from './components/react_fetch_ssr';
import map from 'helpers/map';
import transform_name from 'helpers/transform_name';
import transform_url from 'helpers/transform_url';


function Projects () {

  const language = useSelector(state => state.language);
  const projects = useSelector(state => state.projects);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className={style.wrapper_page}>
      <Container role="page" name="projects" className={style.container}>
        <h1 className={style.title}>{language === 'es' ? 'Portafolio' : 'Portfolio'}</h1>
        <div className={style.list_container}>
          {map(projects, (project, key) => (
            <Project 
              key={key} 
              {...project}
              name={transform_name(key)}
              url={transform_url(key)}
            />
          ))}
        </div>
        <h1 className={style.title}>{language === 'es' ? 'Contribuciones' : 'Contributions'}</h1>
        <ReactFetchSsr />
      </Container>
    </div>
  )
}

export default Projects;