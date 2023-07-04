import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import productService from "./productService";
import {toast} from "react-toastify"

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
  async (data,thunkAPI) => {
    try {
      return await productService.getAllProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllprodCategories = createAsyncThunk(
  "product/all-product-categories",
  async (thunkAPI) => {
    try {
      return await productService.getAllCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "product/add-to-wishlist",
  async (data,thunkAPI) => {
    try {
      return await productService.addToWishlist(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const rateAProduct = createAsyncThunk(
  "product/rate-a-product",
  async (data, thunkAPI) => {
    try {
      return await productService.rateAProduct(data);
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

    builder.addCase(getAllprodCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllprodCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.prodCategories = action.payload.prodCategories;
      state.res = action.payload.res;
    });
    builder.addCase(getAllprodCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.prodCategories = null;
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
          console.log(state.res?.success);
          state.res = action.payload.res;
        });
        builder.addCase(addToWishlist.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.error;
          if(state.isError){
            toast.error(action.error);
          }
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

         builder.addCase(rateAProduct.pending, (state, action) => {
           state.isLoading = true;
         });
         builder.addCase(rateAProduct.fulfilled, (state, action) => {
           state.isLoading = false;
           state.isSuccess = true;
           state.isError = false;
           state.ratedProduct = action.payload.ratedProduct;
           state.res = action.payload.res;
           if(state.res && state.ratedProduct){
            toast.success("Product is Rated Successfully")
           }
         });
         builder.addCase(rateAProduct.rejected, (state, action) => {
           state.isLoading = false;
           state.isSuccess = false;
           state.isError = true;
           state.message = action.error;
           state.res = null;
           if(state.isError){
            toast.error("Something went wrong")
           }
         });

    builder.addCase(resetProductState, () => initialState);
  },
});

export const productReducer = productSlice.reducer;