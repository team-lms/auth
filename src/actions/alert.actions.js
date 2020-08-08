import { AlertConstants } from '../constants';

export default {
  success: (message) => ({ type: AlertConstants.SUCCESS, message }),
  error: (message) => ({ type: AlertConstants.ERROR, message }),
  clear: () => ({ type: AlertConstants.CLEAR })
};
