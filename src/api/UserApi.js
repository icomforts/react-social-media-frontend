import api from "./apiConfig";
const UserApi = {
  get: (id) => {
    const url = `user/${id}`;
    return api.get(url);
  },
  getAll: () => {
    const url = `user`;
    return api.get(url);
  },
  update: (id, data) => {
    const url = `user/${id}`;
    return api.put(url, data);
  },
  follow: (id, data) => {
    const url = `user/${id}/follow`;
    return api.put(url, data);
  },
  unFollow: (id, data) => {
    const url = `user/${id}/unfollow`;
    return api.put(url, data);
  },
};
export default UserApi;
