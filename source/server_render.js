import React from 'react';
import asyncRenderToString from 'react-fetch-ssr';
import { StaticRouter } from "react-router";
import App from './app/app'
import { renderToStaticMarkup } from 'react-dom/server';
import Markup from './markup';
import reducer from './app/redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import  {Provider} from 'react-redux';
import initialState from './app/initial_state';
import define_language from './define_language';

async function serverRender(request, response){

	const store = createStore(
		reducer,
		define_language(request, initialState),
		applyMiddleware(
			ReduxThunk
		)
	);
	

	const context = {};
	const content_rendered = await asyncRenderToString(
		<Provider store={store}>
			<StaticRouter location={request.url} context={context}>
				<App />
			</StaticRouter>
		</Provider>
	);

	const preloaded_state = store.getState();
	const html = renderToStaticMarkup(<Markup content_rendered={content_rendered} preloaded_state={preloaded_state}/>);
	
	response.send(html);
};

export default serverRender;