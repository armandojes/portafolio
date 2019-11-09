import { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
 
function Client (props) {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

hydrate(<Client />,document.getElementById('render_target'));