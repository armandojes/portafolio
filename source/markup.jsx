import React from 'react';

function Markup (props){
	return (
		<html>
			<head>
				<title>Portafolio Armando de jesus</title>
			</head>
			<body>
				<div 
					id="render_target"
					dangerouslySetInnerHTML={{__html: props.content_rendered || ''}}
				/>
				<script src={`${ASSETS}/client.js`} />
			</body>
		</html>
	)
}

export default Markup;