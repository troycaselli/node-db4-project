const express = require('express');
const recipesRouter = require('./recipes-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);

server.use((req, res, next) => {
    res.status(404).json(`Path ${req.path} not found`);
})

module.exports = server;