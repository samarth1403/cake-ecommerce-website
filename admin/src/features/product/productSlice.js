import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productService from './productService';

const initialState = {
    products : [],
    isLoading : false,
    isError : false,
    isSuccess : false,
    res : {}
}

export const getAllProducts = createAsyncThunk("product/all-products",async(thunkAPI) => {
    try {
        return await productService.getAllProducts();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(getAllProducts.fulfilled ,(state, action)=> {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.products = action.payload.products;
            state.res = action.payload.res;
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.products = null;
          state.res = action.payload.res;
        });
    }
})

export const productReducer = productSlice.reducer;
