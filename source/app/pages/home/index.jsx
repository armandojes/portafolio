import React from 'react';
import Primary from './components/primary';
import About from './components/about';
import Sections from './components/sections';
import Contact from '../contact';
import Helmet from "react-helmet";


function Home (){
	return (
		<section name="home" role="page">
			<Primary />
			<About />
			<Sections />
			<Contact />
		</section>
	)
}

export default Home