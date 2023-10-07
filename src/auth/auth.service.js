const redis = require('../redis/client');

module.exports = {
  savePhpSessionIdToRedis: async (phpSessionId) => {
    const redisClient = await redis.getRedis();

    await redisClient.set('phpSessionId', phpSessionId);

    return true;
  },
  getPhpSessionId: async () => {
    const redisClient = await redis.getRedis();

    const phpSessionId = await redisClient.get('phpSessionId');

    return phpSessionId;
  },
};
