const logger = require('../logger/logger');

module.exports = (req, res, next) => {
  logger.info(`${req.method} ${req.url} ${req.headers['user-agent']}`);
  next();
};
