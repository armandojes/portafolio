import React, {Fragment} from 'react';
import Header from './components/header';
import 'reset-css';
import './base';
import {Switch, Route} from 'react-router';

//pages 
import Home from './pages/home';


function App (){
	return (
		<Fragment>
			<Header />
			<Switch> 
				<Route path="/" exact={true} component={Home} />
			</Switch> 
		</Fragment>
	)
}

export default App;