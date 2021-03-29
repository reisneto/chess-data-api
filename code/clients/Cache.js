const Redis = require('ioredis');
const config = require('../config');

class Cache {
  constructor() {
    this.redis = new Redis({
      host: config.get('redis:host'),
      port: config.get('redis:port'),
    });
  }

  async get(key) {
    const result = await this.redis.get(key);

    if (result) return result;
    return null;
  }

  async set(key, value) {
    await this.redis.set(key, JSON.stringify(value));
  }
}

module.exports = new Cache();
