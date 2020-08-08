import { useHistory } from 'react-router-dom';
import { AuthConstants } from '../constants';
import { AuthService } from '../services';
import AlertActions from './alert.actions';

export default {
  login(username, password) {
    const request = () => ({ type: AuthConstants.LOGIN_REQUEST });
    const success = (user) => ({ type: AuthConstants.LOGIN_SUCCESS, user });
    const failure = (error) => ({ type: AuthConstants.LOGIN_FAILURE, error });

    return async (dispatch) => {
      dispatch(request({ username }));
      const response = await AuthService.login(username, password);
      if (response && response.success) {
        dispatch(success(response.data.user));
        useHistory().push('/');
      } else {
        dispatch(failure({}));
        dispatch(AlertActions.error(response.message));
      }
    };
  }
};
