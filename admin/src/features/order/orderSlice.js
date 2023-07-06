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
  async (data,thunkAPI) => {
    try {
      return await orderService.getAllOrders(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrderByUserId = createAsyncThunk(
  "order/get-orders-byUserId",
  async (data,thunkAPI) => {
    try {
      return await orderService.getOrderByUserId(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrderByOrderId = createAsyncThunk(
  "order/get-orders-byOrderId",
  async (data, thunkAPI) => {
    try {
      return await orderService.getOrderByOrderId(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "order/update-order-status",
  async (data, thunkAPI) => {
    try {
      return await orderService.updateOrderStatus(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getMonthlyOrders = createAsyncThunk(
  "order/get-monthly-orders",
  async (data, thunkAPI) => {
    try {
      return await orderService.getMonthlyOrders(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getYearlyOrders = createAsyncThunk(
  "order/get-yearly-orders",
  async (data, thunkAPI) => {
    try {
      return await orderService.getYearlyOrders(data);
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

    builder.addCase(getOrderByOrderId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOrderByOrderId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.gotOrderByOrderId = action.payload.gotOrderByOrderId;
      state.res = action.payload.res;
    });
    builder.addCase(getOrderByOrderId.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.orders = null;
      state.res = null;
    });

     builder.addCase(getMonthlyOrders.pending, (state, action) => {
       state.isLoading = true;
     });
     builder.addCase(getMonthlyOrders.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.isError = false;
       state.monthlyOrders = action.payload;
       state.res = action.payload.res;
     });
     builder.addCase(getMonthlyOrders.rejected, (state, action) => {
       state.isLoading = false;
       state.isSuccess = false;
       state.isError = true;
       state.orders = null;
       state.res = null;
     });

     builder.addCase(getYearlyOrders.pending, (state, action) => {
       state.isLoading = true;
     });
     builder.addCase(getYearlyOrders.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.isError = false;
       state.yearlyOrders = action.payload;
       state.res = action.payload.res;
     });
     builder.addCase(getYearlyOrders.rejected, (state, action) => {
       state.isLoading = false;
       state.isSuccess = false;
       state.isError = true;
       state.orders = null;
       state.res = null;
     });

     builder.addCase(updateOrderStatus.pending, (state, action) => {
       state.isLoading = true;
     });
     builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.isError = false;
       state.updatedOrder = action.payload?.updatedOrder;
       state.res = action.payload.res;
     });
     builder.addCase(updateOrderStatus.rejected, (state, action) => {
       state.isLoading = false;
       state.isSuccess = false;
       state.isError = true;
       state.orders = null;
       state.res = null;
     });
  },
});

export const orderReducer = orderSlice.reducer;
