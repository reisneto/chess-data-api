const express = require('express');
const { ValidationError } = require('express-validation');
const validate = require('./validation');
const cache = require('./clients/Cache');
const chessService = require('./services/chess');
const logger = require('./utils/logger');
const config = require('./config');
const { applyMiddlewares } = require('./middlewares');

const app = express();

applyMiddlewares(app);

app.get('/status', (request, response) => {
  return response.status(200).json({ status: 'online' });
});

app.get(
  '/player/:username',
  validate.getPlayerUsername(),
  async (request, response) => {
    const { username } = request.params;
    const playerCached = await cache.get(`player:${username}`);
    if (playerCached) {
      return response.status(200).json(JSON.parse(playerCached));
    }

    const player = await chessService.getPlayer(username);
    if (player) {
      await cache.set(`player:${username}`, player);
      return response.status(200).json(player);
    }

    return response.status(404).json({ message: 'player not found' });
  }
);

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return next(err);
});

const PORT = config.get('express:port');

app.listen(PORT, () => {
  logger.info(`listening to port ${PORT}`);
  logger.debug(`listening to port ${PORT}`);
});
