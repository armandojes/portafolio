import React from 'react';

function Markup (props){
	
	const preloaded_state = JSON.stringify(props.preloaded_state);

	return (
		<html>
			<head>
				<title>Portafolio Armando de jesus</title>
				<link rel="stylesheet" href={`${ASSETS}/styles.css`}/>
				<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
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