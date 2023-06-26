import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import prodCategoryService from "./prodCategoryService";

const initialState = {
  prodCategories: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  res: {},
};

export const getAllprodCategories = createAsyncThunk("product/all-product-categories",async(thunkAPI)=>{
    try {
        return await prodCategoryService.getAllprodCategories();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const prodCategorySlice = createSlice({
    name:"prodCategory",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
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
         state.products = null;
         state.res = null;
       });
    }
})

export const prodCategoryReducer = prodCategorySlice.reducer;