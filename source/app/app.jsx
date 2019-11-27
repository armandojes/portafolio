import React, {Fragment} from 'react';
import Header from './components/header';
import 'reset-css';
import './base';
import {Switch, Route} from 'react-router';

//pages 
import Home from './pages/home';
import Skills from './pages/skills';
import Proyect from './pages/proyect';


function App (){
	return (
		<Fragment>
			<Header />
			<Switch> 
				<Route path="/" exact={true} component={Home} />
				<Route path="/skills" exact={true} component={Skills} />
				<Route path="/proyect/:url" exact={true} component={Proyect} />
			</Switch> 
		</Fragment>
	)
}

export default App;