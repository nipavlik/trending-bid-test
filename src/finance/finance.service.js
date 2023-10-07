const axios = require('axios');

const {
  BusinessError,
  businessErrorsCode,
} = require('../errors/businessError');

const authService = require('../auth/auth.service');

module.exports = {
  getBalance: async () => {
    const phpSessionId = await authService.getPhpSessionId();

    if (!phpSessionId) {
      throw new BusinessError(businessErrorsCode.API_UNAUTHORIZED);
    }

    try {
      const apiResponse = await axios.get(
        'https://trending.bid/api/user/getprofile',
        {
          headers: {
            Cookie: `PHPSESSID=${phpSessionId};`,
          },
        }
      );

      return apiResponse.data.data.balance;
    } catch (error) {
      if (error.response.status === 401) {
        throw new BusinessError(businessErrorsCode.API_UNAUTHORIZED);
      } else {
        throw new BusinessError(businessErrorsCode.API_NOT_AVAILABLE);
      }
    }
  },
};
