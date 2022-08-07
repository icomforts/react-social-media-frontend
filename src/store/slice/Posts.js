import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostApi from "../../api/PostApi";
import UploadApi from "../../api/UploadApi";

export const getTimelinePosts = createAsyncThunk(
  "getTimelinePosts",
  async (id, thunkAPI) => {
    try {
      const res = await PostApi.getTimelinePosts(id);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const uploadPost = createAsyncThunk(
  "uploadPost",
  async (postData, thunkAPI) => {
    try {
      const res = await UploadApi.post(postData);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  extraReducers: {
    [getTimelinePosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [getTimelinePosts.rejected]: (state) => {
      state.posts = null;
    },
    [uploadPost.fulfilled]: (state, action) => {
      state.posts.unshift(action.payload);
    },
    [uploadPost.rejected]: (state) => {
      state.posts = null;
    },
  },
});

export const selectPosts = (state) => state.posts.posts;
export default postsSlice.reducer;
