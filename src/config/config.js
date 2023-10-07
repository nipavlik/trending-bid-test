require('dotenv').config();

const { cleanEnv, str, num } = require('envalid');

module.exports = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production'] }),
  APP_PORT: num(),
  REDIS_URL: str(),
});
