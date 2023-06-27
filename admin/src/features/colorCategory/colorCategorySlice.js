import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const createColorCategory = createAsyncThunk(
  "colorCategory/create",
  async (data, thunkAPI) => {
    try {
      return await colorCategoryService.createColorCategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getColorCategory = createAsyncThunk(
  "colorCategory/get",
  async (id, thunkAPI) => {
    try {
      return await colorCategoryService.getColorCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateColorCategory = createAsyncThunk(
  "colorCategory/update",
  async (data, thunkAPI) => {
    try {
      return await colorCategoryService.updateColorCategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteColorCategory = createAsyncThunk(
  "colorCategory/delete",
  async (id, thunkAPI) => {
    try {
      return await colorCategoryService.deleteColorCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetColorCategoryState = createAction("reset/colorCategoryState");

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

    builder.addCase(createColorCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createColorCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.createdColor = action.payload.createdColor;
      state.res = action.payload.res;
    });
    builder.addCase(createColorCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(getColorCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getColorCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.gotColorCategory = action.payload.gotColorCategory;
      state.res = action.payload.res;
    });
    builder.addCase(getColorCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(updateColorCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateColorCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.updatedColorCategory = action.payload?.updatedColorCategory;
      state.res = action.payload?.res;
    });
    builder.addCase(updateColorCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(deleteColorCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteColorCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.deletedColorCategory = action.payload.deletedColorCategory;
      state.res = action.payload.res;
    });
    builder.addCase(deleteColorCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(resetColorCategoryState, () => initialState);
  },
});

export const colorCategoryReducer = colorCategorySlice.reducer;
