const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/config');

const notFoundMiddleware = require('./middlewares/notFound.middleware');
const loggerMiddleware = require('./middlewares/logger.middleware');
const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware');

const logger = require('./logger/logger');

// Test redis
const redis = require('./redis/client');
(async () => {
  await redis.getRedis();
})();
// End Test redis

const app = express();

app.use(bodyParser.json());
app.use(loggerMiddleware);

require('./auth/auth.route')(app);
require('./finance/finance.route')(app);

app.use(errorHandlerMiddleware);
app.all('*', notFoundMiddleware);

app.listen(config.APP_PORT, () => {
  logger.info(`App listening on port ${config.APP_PORT}`);
});
