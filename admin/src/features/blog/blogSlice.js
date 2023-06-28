import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
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

export const createBlog = createAsyncThunk(
  "blog/create",
  async (data, thunkAPI) => {
    try {
      return await blogService.createBlog(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getBlog = createAsyncThunk(
  "blog/get",
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blog/update",
  async (data, thunkAPI) => {
    try {
      return await blogService.updateBlog(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blog/delete",
  async (id, thunkAPI) => {
    try {
      return await blogService.deleteBlog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetBlogState = createAction("reset/blogState");

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
      state.res = null;
    });

    builder.addCase(createBlog.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.createdBlog = action.payload?.createdBlog;
      state.res = action.payload?.res;
    });
    builder.addCase(createBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });


         builder.addCase(getBlog.pending, (state, action) => {
           state.isLoading = true;
         });
         builder.addCase(getBlog.fulfilled, (state, action) => {
           state.isLoading = false;
           state.isSuccess = true;
           state.isError = false;
           state.gotBlog = action.payload.gotBlog;
           state.res = action.payload.res;
           
         });
         builder.addCase(getBlog.rejected, (state, action) => {
           state.isLoading = false;
           state.isSuccess = false;
           state.isError = true;
           state.message = action.error;
           state.res = null;
         });

         builder.addCase(updateBlog.pending, (state, action) => {
           state.isLoading = true;
         });
         builder.addCase(updateBlog.fulfilled, (state, action) => {
           state.isLoading = false;
           state.isSuccess = true;
           state.isError = false;
           state.updatedBlog = action.payload?.updatedBlog;
           state.res = action.payload?.res;
         });
         builder.addCase(updateBlog.rejected, (state, action) => {
           state.isLoading = false;
           state.isSuccess = false;
           state.isError = true;
           state.message = action.error;
           state.res = null;
         });

         builder.addCase(deleteBlog.pending, (state, action) => {
           state.isLoading = true;
         });
         builder.addCase(deleteBlog.fulfilled, (state, action) => {
           state.isLoading = false;
           state.isSuccess = true;
           state.isError = false;
           state.deletedBlog = action.payload.deletedBlog;
           state.res = action.payload.res;
         });
         builder.addCase(deleteBlog.rejected, (state, action) => {
           state.isLoading = false;
           state.isSuccess = false;
           state.isError = true;
           state.message = action.error;
           state.res = null;
         });

    builder.addCase(resetBlogState, () => initialState);
  },
});

export const blogReducer = blogSlice.reducer;
