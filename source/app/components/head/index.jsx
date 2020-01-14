import React from 'react';
import Helmet from "react-helmet";

function Head(props){
  return (
    <Helmet>
      <base href={BASEURL} />
      <link rel="stylesheet" href={`${ASSETS}/styles.css`}/>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/segoe-fonts@1.0.1/segoe-fonts.min.css" rel="stylesheet" />
      <title>{props.title || 'About Armando de jesus'}</title>
      <meta name="description" content={props.description || 'About Armando de jesus,  portfolio, Skills, contributions...'} />
      {/* <meta property="og:url" content={props.url} /> */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.title || 'About Armando de jesus'} />
      <meta property="og:description" content={props.description || 'About Armando de jesus,  portfolio, Skills, contributions...'} />
      <meta property="og:image" content={props.picture  || '/public/pictures/foto.png'}/>
    </Helmet>
  )
}

export default Head;