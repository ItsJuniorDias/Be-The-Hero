const  express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', (request, response) => {
  const { name, email, whatsapp, city, uf} = request.body; 
  
  const id = crypto.ramdomBytes(4).toString('HEX');

  connection('ongs').insert({ 
    id, 
    name,
    email,
    whatsapp,
    city, 
    uf
  })

  return response.json();
});

module.exports = routes;