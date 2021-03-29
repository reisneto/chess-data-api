const nconf = require('nconf');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

nconf
  .argv()
  .env()
  .file('environment', {
    file: path.join(__dirname, `${env}.json`),
  })
  .file('default', {
    file: path.join(__dirname, 'default.json'),
  });

nconf.set('NODE_ENV', env);

module.exports = nconf;
