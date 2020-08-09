import ApiService from './api.service';

const AuthService = {
  login: (data) => ApiService.post('auth/login', data),
  forgotPassword: (data) => ApiService.post('auth/send-otp', data)
};
export default AuthService;
