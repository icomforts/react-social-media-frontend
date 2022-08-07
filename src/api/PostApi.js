import api from "./apiConfig";
const PostApi = {
  getTimelinePosts: (id) => {
    const url = `post/${id}/timeline`;
    return api.get(url);
  },
  likePost: (id, userId) => {
    const url = `post/${id}/like`;
    return api.put(url, { userId });
  },
};
export default PostApi;
