import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";
import countReducer from "./slice/count";
import authReducer from "./slice/Auth";
import uploadReducer from "./slice/Upload";
import postReducer from "./slice/Posts";
export default configureStore({
  reducer: {
    todo: todoReducer,
    count: countReducer,
    auth: authReducer,
    upload: uploadReducer,
    posts: postReducer,
  },
});
