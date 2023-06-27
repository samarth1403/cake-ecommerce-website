import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import occasionService from "./occasionService";

const initialState = {
  occasions: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  res: {},
};

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

export const createOccasion = createAsyncThunk(
  "occasion/create",
  async (data, thunkAPI) => {
    try {
      return await occasionService.createOccasion(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOccasion = createAsyncThunk(
  "occasion/get",
  async (id, thunkAPI) => {
    try {
      return await occasionService.getOccasion(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateOccasion = createAsyncThunk(
  "occasion/update",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      return await occasionService.updateOccasion(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetOccasionState = createAction("reset/occasionState");

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

    builder.addCase(createOccasion.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createOccasion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.createdOccasion = action.payload.createdOccasion;
      state.res = action.payload.res;
    });
    builder.addCase(createOccasion.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(getOccasion.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOccasion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.gotOccasion = action.payload.gotOccasion;
      state.res = action.payload.res;
    });
    builder.addCase(getOccasion.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(updateOccasion.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateOccasion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.updatedOccasion = action.payload.updatedOccasion;
      state.res = action.payload.res;
    });
    builder.addCase(updateOccasion.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(resetOccasionState, () => initialState);
  },
});

export const occasionReducer = occasionSlice.reducer;
