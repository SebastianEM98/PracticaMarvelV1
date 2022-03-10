const express = require('express');
const moviesRouter = require('./movies.router');
const fakersRouter = require('./fakers.router');
const departamentsRouter = require('./departaments.router');
const marvelsRouter = require('./marvel.router');

function routerApi(my_app) {
    const router = express.Router();
    /* parte estatica del endpoint: http://localhost:3000/api/v1 */
    my_app.use('/api/v1', router);
    /* parte estatica mas la dinamica del endpoint: http://localhost:3000/api/v1/movies */
    router.use('/movies', moviesRouter);
    /* parte estatica mas la dinamica del endpoint: http://localhost:3000/api/v1/fakers */
    router.use('/fakers', fakersRouter);
    /* parte estatica mas la dinamica del endpoint: http://localhost:3000/api/v1/departaments */
    router.use('/departaments', departamentsRouter);
    /* parte estatica mas la dinamica del endpoint: http://localhost:3000/api/v1/marvels */
    router.use('/marvels', marvelsRouter);
}

module.exports = routerApi;