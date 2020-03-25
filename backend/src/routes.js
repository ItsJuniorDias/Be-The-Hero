const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create );

routes.post('/incidents', IncidentsController.create);

module.exports = routes;