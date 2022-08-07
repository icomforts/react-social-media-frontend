import api from "./apiConfig";
const AuthApi = {
  login: (data) => {
    const url = "auth/login";
    return api.post(url, data);
  },
  register: (data) => {
    const url = "auth/register";
    return api.post(url, data);
  },
};
export default AuthApi;
