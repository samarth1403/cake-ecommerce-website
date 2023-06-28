import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  createdProduct: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  res: {},
  message:""
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

export const createAProduct = createAsyncThunk(
  "product/create",
  async (data, thunkAPI) => {
    try {
      return await productService.createAProduct(data);
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

export const updateProduct = createAsyncThunk(
  "product/update",
  async (data, thunkAPI) => {
    try {
      return await productService.updateProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk("product/delete", async (id, thunkAPI) => {
  try {
    return await productService.deleteProduct(id);
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

    builder.addCase(createAProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createAProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.createdProduct = action.payload.createdProduct;
      state.res = action.payload.res;
    });
    builder.addCase(createAProduct.rejected, (state, action) => {
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

     builder.addCase(updateProduct.pending, (state, action) => {
       state.isLoading = true;
     });
     builder.addCase(updateProduct.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.isError = false;
       state.updatedProduct = action.payload?.updatedProduct;
       state.res = action.payload?.res;
     });
     builder.addCase(updateProduct.rejected, (state, action) => {
       state.isLoading = false;
       state.isSuccess = false;
       state.isError = true;
       state.message = action.error;
       state.res = null;
     });

     builder.addCase(deleteProduct.pending, (state, action) => {
       state.isLoading = true;
     });
     builder.addCase(deleteProduct.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.isError = false;
       state.deletedProduct = action.payload.deletedProduct;
       state.res = action.payload.res;
     });
     builder.addCase(deleteProduct.rejected, (state, action) => {
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
