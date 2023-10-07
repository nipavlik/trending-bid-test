const asyncHandler = require('express-async-handler');

const financeController = require('./finance.controller');

module.exports = (app) => {
  app.get('/balance', asyncHandler(financeController.getBalance));
};
