import { AuthConstants } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case AuthConstants.LOGIN_REQUEST:
      return { isBusy: true };
    case AuthConstants.LOGIN_SUCCESS:
      return { user: action.user };
    case AuthConstants.LOGIN_FAILURE:
      return {};
    case AuthConstants.FORGOT_PASSWORD_REQUEST:
      return { isBusy: true };
    case AuthConstants.FORGOT_PASSWORD_SUCCESS:
      return { user: { email: action.userId } };
    case AuthConstants.FORGOT_PASSWORD_FAILURE:
      return {};
    case AuthConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
