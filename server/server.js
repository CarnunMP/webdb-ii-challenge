const express = require('express');
const carsRouter = require('./cars/carsRouter');

console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

const server = express();

server.use(express.json());
server.use(logger);
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.send('<h3>Looking good!<h3>');
})

function logger(req, res, next) {
  console.log(req.method, req.url, new Date().toISOString());
  next();
}

module.exports = server;
