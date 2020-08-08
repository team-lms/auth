import ApiService from './api.service';

const AuthService = {
  login: (data) => ApiService.post(data)
};
export default AuthService;
