const asyncHandler = require('express-async-handler')

const authController = require('./auth.controller');

module.exports = (app) => {
  app.post('/auth', asyncHandler(authController.auth));
};
