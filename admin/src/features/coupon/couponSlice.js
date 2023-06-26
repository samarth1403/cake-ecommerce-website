import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import couponService from "./couponService";

const initialState = {
  coupons: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  res: {},
};

export const getAllCoupons = createAsyncThunk(
  "coupon/all-coupons",
  async (thunkAPI) => {
    try {
      return await couponService.getAllCoupons();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createCoupon = createAsyncThunk(
  "coupon/create",
  async (data, thunkAPI) => {
    try {
      return await couponService.createCoupon(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetCouponState = createAction("reset/couponState");

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCoupons.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCoupons.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.coupons = action.payload.coupons;
      state.res = action.payload.res;
    });
    builder.addCase(getAllCoupons.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.coupons = null;
      state.res = null;
    });

    builder.addCase(createCoupon.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createCoupon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.createdCoupon = action.payload.createdCoupon;
      state.res = action.payload.res;
    });
    builder.addCase(createCoupon.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(resetCouponState, () => initialState);
  },
});

export const couponReducer = couponSlice.reducer;
