import { AuthConstants } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case AuthConstants.LOGIN_REQUEST:
      return { loggingIn: true };
    case AuthConstants.LOGIN_SUCCESS:
      return { loggedIn: true, user: action.user };
    case AuthConstants.LOGIN_FAILURE:
      return {};
    case AuthConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
