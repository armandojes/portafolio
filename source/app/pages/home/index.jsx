import React from 'react';
import Primary from './components/primary';
import About from './components/about';
import Sections from './components/sections';

function Home (){
	return (
		<section name="home" role="page">
			<Primary />
			<About />
			<Sections />
			<div>
			

			</div>
		</section>
	)
}

export default Home