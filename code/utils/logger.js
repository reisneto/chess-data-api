const pino = require('pino');
const config = require('../config');

const level = config.get('logger:level');

module.exports = pino({ level });
