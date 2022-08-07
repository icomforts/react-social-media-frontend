import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UploadApi from "../../api/UploadApi";

export const uploadImage = createAsyncThunk(
  "uploadImage",
  async (imageData, thunkAPI) => {
    try {
      const data = await UploadApi.image(imageData);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const uploadSlice = createSlice({
  name: "upload",
  initialState: {},
  extraReducers: {
    [uploadImage.fulfilled]: (state, action) => {},
    [uploadImage.rejected]: (state) => {},
  },
});

export default uploadSlice.reducer;
