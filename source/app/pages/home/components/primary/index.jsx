import React, {useEffect, useState, Fragment} from 'react';
import Container from '../../../../components/container';
import style from './style';
import useSelect from 'hooks/selector.js'
import Typed from 'typed.js';

function Primary (props){

	const language = useSelect(state => state.language);
	
	useEffect(() => {
		var typed_instance = new Typed('#typed', typed_options);
		return () => {typed_instance.destroy()};
	},[language]);

	const toogle_style = () => {
		document.getElementById('toogle_style').classList.toggle(style.box_animate_another);
	}

	var typed_options = {
		stringsElement:  '#typed-strings',
		typeSpeed: 50,
		backSpeed: 35,
		backDelay: 1000,
		loop: true,
		onStringTyped: toogle_style,
	};

	return (
		<section className={style.wrapper} style={{backgroundImage: `url(${ASSETS}/pictures/foto.png)`}}>
			<Container className={style.container} >
				<section className={style.section} >
					<div className={style.box_animate} id="toogle_style">
						<div id="typed-strings">
							{language === 'es' && (
								<Fragment>
									<p className={style.hidden}> Hola, soy armando de jesus, <br /> Front-end developer</p>
									<p className={style.hidden}> Hola, soy armando de jesus, <br /> back-end developer</p>
								</Fragment>
							)}
							{language === 'us' && (
								<Fragment>
									<p className={style.hidden}> Hi, I am Armando de Jesus, <br /> Front-end developer</p>
									<p className={style.hidden}> Hi, I am Armando de Jesus, <br /> back-end developer</p>
								</Fragment>
							)}
							
						</div>
						<span id="typed"></span>
					</div>
				</section>
			</Container>
		</section>
	);
}

export default Primary;