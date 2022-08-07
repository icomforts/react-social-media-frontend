import api from "./apiConfig";
const MessageApi = {
  addMessage: (data) => {
    const url = "message";
    return api.post(url, data);
  },
  getMessages: (chatRoomId) => {
    const url = `message/${chatRoomId}`;
    return api.get(url);
  },
};
export default MessageApi;
