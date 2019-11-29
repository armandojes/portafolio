import { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { createStore, applyMiddleware } from 'redux';
import reducer from './app/redux/reducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const preloaded_state = window.preloaded_state;

// creando tienda
const  store  =  createStore (
	reducer,
	preloaded_state,
  composeWithDevTools ( applyMiddleware (ReduxThunk, logger))
);

function Client (props) {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	)
}

hydrate(<Client />,document.getElementById('render_target'));