const { StatusCodes } = require('http-status-codes');

const authService = require('./auth.service');

module.exports = {
  auth: async (req, res) => {
    const phpSessionId = req.body.PHPSESSID;

    await authService.savePhpSessionIdToRedis(phpSessionId);

    return res.status(StatusCodes.OK).json({
      success: true,
    });
  },
};
