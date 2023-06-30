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
  async (prodId,thunkAPI) => {
    try {
      return await productService.getAllProducts(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "product/add-to-wishlist",
  async (prodId,thunkAPI) => {
    try {
      return await productService.addToWishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProduct = createAsyncThunk("product/get", async (id, thunkAPI) => {
  try {
    return await productService.getProduct(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

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

        builder.addCase(addToWishlist.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(addToWishlist.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.updatedUser = action.payload.updatedUser;
          state.res = action.payload.res;
        });
        builder.addCase(addToWishlist.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.error;
          state.res = null;
        });

        builder.addCase(getProduct.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.gotProduct = action.payload.gotProduct;
          state.res = action.payload.res;
        });
        builder.addCase(getProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.error;
          state.res = null;
        });

    builder.addCase(resetProductState, () => initialState);
  },
});

export const productReducer = productSlice.reducer;