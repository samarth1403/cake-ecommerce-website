import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import occasionService from "./occasionService";

export const getAllOccasions = createAsyncThunk(
  "occasion/all-occasions",
  async (thunkAPI) => {
    try {
      return await occasionService.getAllOccasions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  occasions: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  res: {},
};

const occasionSlice = createSlice({
  name: "occasion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOccasions.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllOccasions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.occasions = action.payload.occasions;
      state.res = action.payload.res;
    });
    builder.addCase(getAllOccasions.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.occasions = null;
      state.res = null;
    });
  },
});

export const occasionReducer = occasionSlice.reducer;
