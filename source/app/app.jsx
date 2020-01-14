import React, {Fragment} from 'react';
import Header from './components/header';
import 'reset-css';
import './base';
import {Switch, Route} from 'react-router';
import Head from './components/head';
//pages 
import Home from './pages/home';
import Skills from './pages/skills';
import Proyect from './pages/proyect';
import Projects from './pages/projects';
import Certificates from './pages/certificates';
import Contact from './pages/contact';


function App (){
	return (
		<Fragment>
			<Head />
			<Header />
			<Switch> 
				<Route path="/" exact={true} component={Home} />
				<Route path="/skills" exact={true} component={Skills} />
				<Route path="/project/:url" exact={true} component={Proyect} />
				<Route path="/projects" exact={true} component={Projects} />
				<Route path="/certificates" exact={true} component={Certificates} />
				<Route path="/certificate/:id" exact={true} component={Certificates} />
				<Route path="/contact" exact={true} component={Contact} />
			</Switch> 
		</Fragment>
	)
}

export default App;