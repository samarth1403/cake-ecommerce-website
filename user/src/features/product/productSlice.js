import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  res: {},
  message: "",
};

export const getAllProducts = createAsyncThunk(
  "product/all-products",
  async (thunkAPI) => {
    try {
      return await productService.getAllProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetProductState = createAction("reset/productState");

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.products = action.payload.products;
      state.res = action.payload.res;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.products = null;
      state.message = action.error;
      state.res = null;
    });

    builder.addCase(resetProductState, () => initialState);
  },
});

export const productReducer = productSlice.reducer;