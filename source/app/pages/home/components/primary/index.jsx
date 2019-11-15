import React, {Fragment} from 'react';
import Container from '../../../../components/container';
import style from './style';
import useSelect from 'hooks/selector.js'

function Primary (props){
	
	const language = useSelect(state => state.language);

	return (
		<section className={style.wrapper} style={{backgroundImage: `url(${ASSETS}/pictures/foto.png)`}}>
			<Container className={style.container} >
				{language === 'us' && (
					<Fragment>
						<h1>I am</h1>
						<h1>Armando de jesus</h1>
						<h2>Fullstack javascript developer</h2>
					</Fragment>
				)}
				{language === 'es' && (
					<Fragment>
						<h1>Yo soy</h1>
						<h1>Armando de jesus</h1>
						<h2>Desarrollador Fullstack javascript</h2>
					</Fragment>
				)}
			</Container>
		</section>
	);

}

export default Primary;