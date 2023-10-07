const API_UNAUTHORIZED = 'API_UNAUTHORIZED';
const API_NOT_AVAILABLE = 'API_NOT_AVAILABLE';

class BusinessError extends Error {
  constructor(error) {
    super(error);
    this.code = error;
  }
}

module.exports = {
  BusinessError,
  businessErrorsCode: {
    API_UNAUTHORIZED,
    API_NOT_AVAILABLE,
  },
};
