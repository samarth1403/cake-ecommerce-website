import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  res: {},
};

export const getAllBlogs = createAsyncThunk(
  "blog/all-blogs",
  async (thunkAPI) => {
    try {
      return await blogService.getAllBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.blogs = action.payload.blogs;
      state.res = action.payload.res;
    });
    builder.addCase(getAllBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.blogs = null;
      state.res = action.payload.res;
    });
  },
});

export const blogReducer = blogSlice.reducer;
