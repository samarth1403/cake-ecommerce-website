import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService";

const initialState = {
  orders: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  res: {},
};

export const getAllOrders = createAsyncThunk(
  "order/all-orders",
  async (thunkAPI) => {
    try {
      return await orderService.getAllOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrderByUserId = createAsyncThunk(
  "order/get-orders-byUserId",
  async (id,thunkAPI) => {
    try {
      return await orderService.getOrderByUserId(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.orders = action.payload.orders;
      state.res = action.payload.res;
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.orders = null;
      state.res = null;
    });

    builder.addCase(getOrderByUserId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOrderByUserId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.userOrders = action.payload.userOrders;
      state.res = action.payload.res;
    });
    builder.addCase(getOrderByUserId.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.orders = null;
      state.res = null;
    });
  },
});

export const orderReducer = orderSlice.reducer;
