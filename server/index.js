const path = require('path');
const jsonServer = require('json-server');

const config = require('./config.json');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'database.json'));
const middlewares = jsonServer.defaults();
const bodyParser = jsonServer.bodyParser;

server.use(bodyParser);
server.use(middlewares);
server.use(router);
server.listen(config.port, () => {
  console.log(`JSON Server is running on port ${config.port}`)
});
