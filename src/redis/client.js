const { createClient } = require('redis');

const config = require('../config/config')

const logger = require('../logger/logger')

const redisModule = (() => {
  let redisClient;

  const createRedisClient = async () => {
    return await createClient({
      url: config.REDIS_URL,
    })
      .on('error', (err) => console.error('Redis Client Error', err))
      .on('ready', () => logger.info('Redis Client Ready'))
      .connect();
  };

  return {
    getRedis: async function () {
      return redisClient || (redisClient = await createRedisClient());
    },
  };
})();

module.exports = redisModule;
