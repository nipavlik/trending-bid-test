const { StatusCodes } = require('http-status-codes');
const {
  BusinessError,
  businessErrorsCode,
} = require('../errors/businessError');
const { HttpError, httpErrorsCode } = require('../errors/httpError');

const financeService = require('./finance.service');

module.exports = {
  getBalance: async (_, res) => {
    const balance = await financeService.getBalance().catch((error) => {
      if (error instanceof BusinessError) {
        if (error.code === businessErrorsCode.API_UNAUTHORIZED) {
          throw new HttpError(
            StatusCodes.UNAUTHORIZED,
            httpErrorsCode.UNAUTHORIZED
          );
        }
        if (error.code === businessErrorsCode.API_NOT_AVAILABLE) {
          throw new HttpError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            httpErrorsCode.API_NOT_AVAILABLE
          );
        }
      } else {
        throw new Error(error);
      }
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      balance,
    });
  },
};
