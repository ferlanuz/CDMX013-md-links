const functions = require('./functions.js');
const api = require('./api.js');
const axios = require('axios');

api.mdLinks('./src', {
    validate: false,
    stats: true
}).then(console.log);
 /*const okLink = 'https://github.com/ferlanuz/CDMX013-md-links/tree/feature-requests';
const linkRoto = 'https://ku-seo.com/libros-seo-sem/';
axios.get(linkRoto)
.then(console.log)
.catch((err) => console.log(`Error:`, err.response.status, err.response.statusText));*/
//make function?
