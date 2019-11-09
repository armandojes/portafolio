import React from 'react';
import asyncRenderToString from 'react-fetch-ssr';
import { StaticRouter } from "react-router";
import App from './app/app'
import { renderToStaticMarkup } from 'react-dom/server';
import Markup from './markup';


async function serverRender(request, response){
	
	const context = {};
	const content_rendered = await asyncRenderToString(
		<StaticRouter location={request.url} context={context}>
			<App />
		</StaticRouter>
	);

	const html = renderToStaticMarkup(<Markup content_rendered={content_rendered} />);
	
	response.send(html);
};

export default serverRender;