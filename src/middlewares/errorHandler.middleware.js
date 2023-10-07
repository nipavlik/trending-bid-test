const { StatusCodes } = require('http-status-codes');

const { HttpError, httpErrorsCode } = require('../errors/httpError');
const logger = require('../logger/logger');

module.exports = (error, req, res, next) => {
  if (error instanceof HttpError) {
    return res
      .status(error.status)
      .json({ success: false, message: error.message, errors: error.errors });
  }

  logger.error(error);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: httpErrorsCode.INTERNAL_SERVER_ERROR,
  });
}