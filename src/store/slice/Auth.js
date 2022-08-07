import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthApi from "../../api/AuthApi";
import UserApi from "../../api/UserApi";

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    try {
      const data = await AuthApi.login(loginData);
      const { password, ...userData } = data;
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (registerData, thunkAPI) => {
    try {
      const data = await AuthApi.register(registerData);
      const { password, ...userData } = data;
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getUser = createAsyncThunk("get/user", async (id, thunkAPI) => {
  try {
    const data = await UserApi.get(id);
    const { password, ...userData } = data;
    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});

export const updateUser = createAsyncThunk(
  "update/user",
  async ({ id, userData: newUserData }, thunkAPI) => {
    try {
      const data = await UserApi.update(id, newUserData);
      const { password, ...userData } = data;
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const followUser = createAsyncThunk(
  "follow/user",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await UserApi.follow(id, data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const unFollowUser = createAsyncThunk(
  "unFollow/user",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await UserApi.unFollow(id, data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { authData: user, isLoggedIn: true, hasError: false }
  : { authData: null, isLoggedIn: false, hasError: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.authData = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.authData = action.payload;
      state.isLoggedIn = true;
      state.hasError = false;
    },
    [login.rejected]: (state) => {
      state.authData = null;
      state.isLoggedIn = false;
      state.hasError = true;
    },
    [register.fulfilled]: (state, action) => {
      state.authData = action.payload;
      state.isLoggedIn = true;
      state.hasError = false;
    },
    [register.rejected]: (state) => {
      state.authData = null;
      state.isLoggedIn = false;
      state.hasError = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.authData = action.payload;
      state.hasError = false;
    },
    [getUser.rejected]: (state) => {
      state.authData = null;
      state.hasError = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.authData = action.payload;
      state.hasError = false;
    },
    [updateUser.rejected]: (state) => {
      state.hasError = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.authData.user.following = [
        ...state.authData.user.following,
        action.payload._id,
      ];
      localStorage.setItem("user", JSON.stringify(state.authData));
    },
    [followUser.rejected]: (state) => {},
    [unFollowUser.fulfilled]: (state, action) => {
      state.authData.user.following = state.authData.user.following.filter(
        (id) => id !== action.payload._id
      );
      localStorage.setItem("user", JSON.stringify(state.authData));
    },
    [unFollowUser.rejected]: (state) => {},
  },
});

export const selectAuth = (state) => state.auth;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
