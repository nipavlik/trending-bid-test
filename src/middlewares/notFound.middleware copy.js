const { StatusCodes } = require('http-status-codes');

module.exports = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    error: httpErrorsCode.NOT_FOUND,
  });
};
