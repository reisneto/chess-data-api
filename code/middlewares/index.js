const expressPino = require('express-pino-logger');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const logger = require('../utils/logger');

function applyMiddlewares(app) {
  app.use(
    expressPino({
      logger,
    })
  );

  app.use(helmet());

  app.use(cors());
  app.use(compression());
}

module.exports = {
  applyMiddlewares,
};
