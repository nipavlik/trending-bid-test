const { StatusCodes } = require('http-status-codes');

const { HttpError, httpErrorsCode } = require('../errors/httpError');

const authService = require('./auth.service');

module.exports = {
  auth: async (req, res) => {
    const phpSessionId = req.body.PHPSESSID;

    // Не стал добавлять либы для валидации ради одного поля
    if (typeof phpSessionId !== 'string') {
      throw new HttpError(400, httpErrorsCode.VALIDATION_ERROR);
    }

    await authService.savePhpSessionIdToRedis(phpSessionId);

    return res.status(StatusCodes.OK).json({
      success: true,
    });
  },
};
