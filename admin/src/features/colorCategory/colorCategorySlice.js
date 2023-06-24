import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import colorCategoryService from "./colorCategoryService";

const initialState = {
  colorCategories: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  res: {},
};

export const getAllColorCategories = createAsyncThunk(
  "color/all-color-categories",
  async (thunkAPI) => {
    try {
      return await colorCategoryService.getAllColorCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const colorCategorySlice = createSlice({
  name: "colorCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllColorCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllColorCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.colorCategories = action.payload.colorCategories;
      state.res = action.payload.res;
    });
    builder.addCase(getAllColorCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.colorCategories = null;
      state.res = null;
    });
  },
});

export const colorCategoryReducer = colorCategorySlice.reducer;
