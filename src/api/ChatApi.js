import api from "./apiConfig";
const ChatApi = {
  createChat: (data) => {
    const url = "chat";
    return api.post(url, data);
  },
  getChat: (firstUserId, secondUserId) => {
    const url = `chat/find/${firstUserId}/${secondUserId}`;
    return api.get(url);
  },
  getAllChat: (userId) => {
    const url = `chat/${userId}`;
    return api.get(url);
  },
};
export default ChatApi;
