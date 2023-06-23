import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogCategoryService from "./blogCategoryService";

const initialState = {
  blogCategories: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  res: {},
};

export const getAllBlogCategories = createAsyncThunk(
  "blog/all-blog-categories",
  async (thunkAPI) => {
    try {
      return await blogCategoryService.getAllBlogCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const blogCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBlogCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.blogCategories = action.payload.blogCategories;
      state.res = action.payload.res;
    });
    builder.addCase(getAllBlogCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.blogucts = null;
      state.res = action.payload.res;
    });
  },
});

export const blogCategoryReducer = blogCategorySlice.reducer;
