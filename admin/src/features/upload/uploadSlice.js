import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import uploadService from "./uploadService";

const initialState = {
  images: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  res: {},
};

export const uploadProductImg = createAsyncThunk(
  "upload/product/image",
  async (data , thunkAPI) => {
    const formData = new FormData();
    for(let i=0; i<data?.body.length; i++){
        formData.append("images",data?.body[i]);
    }
    try {
      return await uploadService.uploadProductImg({body:formData , Token : data?.Token});
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const uploadBlogImg = createAsyncThunk(
  "upload/blog/image",
  async (data, thunkAPI) => {
    const formData = new FormData();
    for (let i = 0; i < data?.body.length; i++) {
      formData.append("images", data?.body[i]);
    }
    try {
      return await uploadService.uploadBlogImg({
        body: formData,
        Token: data?.Token,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProductImg = createAsyncThunk("delete/product/img",async(data,thunkAPI)=>{
    try {
        return await uploadService.deleteProductImg(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const deleteBlogImg = createAsyncThunk(
  "delete/blog/img",
  async (data, thunkAPI) => {
    try {
      return await uploadService.deleteBlogImg(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetUploadState = createAction("reset/uploadState");

const uploadSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadProductImg.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(uploadProductImg.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.images = action.payload.images;
      state.res = action.payload.res;
    });
    builder.addCase(uploadProductImg.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.images = null;
      state.res = null;
    });

        builder.addCase(uploadBlogImg.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(uploadBlogImg.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.images = action.payload.images;
          state.res = action.payload.res;
        });
        builder.addCase(uploadBlogImg.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.images = null;
          state.res = null;
        });


    builder.addCase(deleteProductImg.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProductImg.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.res = action.payload.res;
    });
    builder.addCase(deleteProductImg.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.res = null;
    });

        builder.addCase(deleteBlogImg.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(deleteBlogImg.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.res = action.payload.res;
        });
        builder.addCase(deleteBlogImg.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.res = null;
        });

        builder.addCase(resetUploadState, ()=>initialState);
  },
});

export const uploadReducer = uploadSlice.reducer;
