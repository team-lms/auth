import Cookies from 'js-cookie';
import { AuthConstants } from '../constants';
import { AuthService } from '../services';
import AlertActions from './alert.actions';

export default {
  login(userDetails) {
    const request = () => ({ type: AuthConstants.LOGIN_REQUEST });
    const success = (user) => ({ type: AuthConstants.LOGIN_SUCCESS, user });
    const failure = (error) => ({ type: AuthConstants.LOGIN_FAILURE, error });
    const redirect = (role) => {
      switch (role) {
        case process.env.REACT_APP_ADMIN_ROLE:
          return process.env.REACT_APP_ADMIN_WEB_URL;
        case process.env.REACT_APP_HR_ROLE:
          return process.env.REACT_APP_HR_WEB_URL;
        case process.env.REACT_APP_SUPERVISOR_ROLE:
          return process.env.REACT_APP_SUPERVISOR_WEB_URL;
        case process.env.REACT_APP_EMPLOYEE_ROLE:
          return process.env.REACT_APP_EMPLOYEE_WEB_URL;
        default:
          return window.location.href;
      }
    };

    return async (dispatch) => {
      dispatch(request());
      const response = await AuthService.login(userDetails);
      if (response && response.success) {
        dispatch(AlertActions.clear());
        dispatch(success(response.data.user));
        Cookies.set('user-token', response.data.token, {
          expires: 60,
          domain: `.${process.env.REACT_APP_APP_URL}`
        });
        window.location.href = redirect(response.data.user.role);
      } else {
        dispatch(failure({}));
        dispatch(AlertActions.error(response.message));
      }
    };
  },

  forgotPassword(userDetails, history) {
    const request = () => ({ type: AuthConstants.FORGOT_PASSWORD_REQUEST });
    const success = () => ({
      type: AuthConstants.FORGOT_PASSWORD_SUCCESS,
      userId: userDetails.userId
    });
    const failure = () => ({ type: AuthConstants.FORGOT_PASSWORD_FAILURE });

    return async (dispatch) => {
      dispatch(request());
      const response = await AuthService.forgotPassword(userDetails);
      if (response && response.success) {
        dispatch(success());
        dispatch(AlertActions.clear());
        history.push('reset-password');
      } else {
        dispatch(failure());
        dispatch(AlertActions.error(response.message));
      }
    };
  }
};
