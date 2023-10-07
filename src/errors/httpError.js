const UNAUTHORIZED = 'UNAUTHORIZED';
const API_NOT_AVAILABLE = 'API_NOT_AVAILABLE';
const NOT_FOUND = 'NOT_FOUND';
const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR';

class HttpError extends Error {
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors;
  }
}

module.exports = {
  HttpError,
  httpErrorsCode: {
    UNAUTHORIZED,
    API_NOT_AVAILABLE,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
  },
};
