import api from "./apiConfig";
const UploadApi = {
  image: (data) => {
    const url = "/upload";
    return api.post(url, data);
  },
  post: (data) => {
    const url = "/post";
    return api.post(url, data);
  },
};
export default UploadApi;
