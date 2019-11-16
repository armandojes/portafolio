import React from 'react';

function Markup (props){
	
	const preloaded_state = JSON.stringify(props.preloaded_state);

	return (
		<html>
			<head>
				<base href={BASEURL} />
				<title>Portafolio Armando de jesus</title>
				<link rel="stylesheet" href={`${ASSETS}/styles.css`}/>
				<meta name="viewport" content="width=device-width, user-scalable=no" />
				<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
				<link href="https://cdn.jsdelivr.net/npm/segoe-fonts@1.0.1/segoe-fonts.min.css" rel="stylesheet" />
				
			</head>
			<body>
				<div 
					id="render_target"
					dangerouslySetInnerHTML={{__html: props.content_rendered || ''}}
				/>
				<script 
					dangerouslySetInnerHTML={{__html: `window.preloaded_state = ${preloaded_state}`}}
				/>
				<script src={`${ASSETS}/client.js`} />
			</body>
		</html>
	)
}

export default Markup;