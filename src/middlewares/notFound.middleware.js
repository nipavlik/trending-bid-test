const { StatusCodes } = require('http-status-codes');

const { httpErrorsCode } = require('../errors/httpError');

module.exports = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    error: httpErrorsCode.NOT_FOUND,
  });
};
