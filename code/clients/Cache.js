const Redis = require('ioredis');

class Cache {
  constructor() {
    this.redis = new Redis({
      host: 'redis',
      port: 6379,
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
