const devConfig = require('./knexfile.js').development;
const knex = require('knex')(devConfig);

module.exports = knex;
