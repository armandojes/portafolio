import express from 'express';
import serverRender from './server_render';
import cookieParser from 'cookie-parser';

const server = express();

//statics server
server.use('/public', express.static('public'));
server.use(cookieParser());
server.get('*', serverRender);


server.listen(3000, () => console.log('**************** server stared **************'));
