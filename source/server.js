import express from 'express';
import serverRender from './server_render';
const server = express();

//statics server
server.use('/public', express.static('public'));
server.use(serverRender);
server.listen(3000, () => console.log('**************** server stared **************'));
