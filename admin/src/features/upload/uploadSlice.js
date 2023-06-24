import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "./uploadService";

const initialState = {
  images: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  res: {},
};

export const uploadImg = createAsyncThunk(
  "upload/image",
  async (data , thunkAPI) => {
    const formData = new FormData();
    for(let i=0; i<data.length; i++){
        formData.append("images",data[i]);
    }
    try {
      return await uploadService.uploadImg(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteImg = createAsyncThunk("delete/img",async(id,thunkAPI)=>{
    try {
        return await uploadService.deleteImg(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const uploadSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadImg.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(uploadImg.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.images = action.payload.images;
      state.res = action.payload.res;
    });
    builder.addCase(uploadImg.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.images = null;
      state.res = null;
    });


    builder.addCase(deleteImg.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteImg.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.images = [];
      state.res = action.payload.res;
    });
    builder.addCase(deleteImg.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.res = null;
    });
  },
});

export const uploadReducer = uploadSlice.reducer;
