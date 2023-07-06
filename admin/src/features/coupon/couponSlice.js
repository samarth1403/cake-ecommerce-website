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
  async (data,thunkAPI) => {
    try {
      return await couponService.getAllCoupons(data);
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

export const getCoupon = createAsyncThunk(
  "coupon/get",
  async(data,thunkAPI) => {
    try {
      return await couponService.getCoupon(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const updateCoupon = createAsyncThunk(
  "coupon/update",
  async (data, thunkAPI) => {
    try {
      return await couponService.updateCoupon(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCoupon = createAsyncThunk("coupon/delete", async (data, thunkAPI) => {
  try {
    return await couponService.deleteCoupon(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

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
    

    builder.addCase(getCoupon.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCoupon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.gotCoupon = action.payload.gotCoupon;
      state.res = action.payload.res;
    });
    builder.addCase(getCoupon.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      state.res = null;
    });

        builder.addCase(updateCoupon.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(updateCoupon.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.updatedCoupon = action.payload.updatedCoupon;
          state.res = action.payload.res;
        });
        builder.addCase(updateCoupon.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.error;
          state.res = null;
        });

        builder.addCase(deleteCoupon.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(deleteCoupon.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.deletedCoupon = action.payload.deletedCoupon;
          state.res = action.payload.res;
        });
        builder.addCase(deleteCoupon.rejected, (state, action) => {
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
