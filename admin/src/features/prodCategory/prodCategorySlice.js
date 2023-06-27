import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import prodCategoryService from "./prodCategoryService";

const initialState = {
  prodCategories: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  res: {},
  message:"",
};

export const getAllprodCategories = createAsyncThunk("product/all-product-categories",async(thunkAPI)=>{
    try {
        return await prodCategoryService.getAllprodCategories();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const createProdCategory = createAsyncThunk("prodCategory/create",async(data , thunkAPI) => {
  try {
    return await prodCategoryService.createProdCategory(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

export const getProdCategory = createAsyncThunk(
  "prodCategory/get",
  async (id, thunkAPI) => {
    try {
      return await prodCategoryService.getProdCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProdCategory = createAsyncThunk(
  "prodCategory/update",
  async (data, thunkAPI) => {
    try {
      return await prodCategoryService.updateProdCategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProdCategory = createAsyncThunk(
  "prodCategory/delete",
  async (id, thunkAPI) => {
    try {
      return await prodCategoryService.deleteProdCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetProdCategoryState = createAction("reset/prodCategoryState")

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
         state.prodCategories = null;
         state.message = action.error;
         state.res = null;
       });


       builder.addCase(createProdCategory.pending, (state, action) => {
         state.isLoading = true;
       });
       builder.addCase(createProdCategory.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isError = false;
         state.createdCategory = action.payload.createdCategory;
         state.res = action.payload.res;
       });
       builder.addCase(createProdCategory.rejected, (state, action) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
         state.message = action.error;
         state.res = null;
       });

       builder.addCase(getProdCategory.pending, (state, action) => {
         state.isLoading = true;
       });
       builder.addCase(getProdCategory.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isError = false;
         state.gotProdCategory = action.payload.gotProdCategory;
         state.res = action.payload.res;
       });
       builder.addCase(getProdCategory.rejected, (state, action) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
         state.message = action.error;
         state.res = null;
       });

       builder.addCase(updateProdCategory.pending, (state, action) => {
         state.isLoading = true;
       });
       builder.addCase(updateProdCategory.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isError = false;
         state.updatedProdCategory = action.payload?.updatedProdCategory;
         state.res = action.payload?.res;
       });
       builder.addCase(updateProdCategory.rejected, (state, action) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
         state.message = action.error;
         state.res = null;
       });

       builder.addCase(deleteProdCategory.pending, (state, action) => {
         state.isLoading = true;
       });
       builder.addCase(deleteProdCategory.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isError = false;
         state.deletedProdCategory = action.payload.deletedProdCategory;
         state.res = action.payload.res;
       });
       builder.addCase(deleteProdCategory.rejected, (state, action) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
         state.message = action.error;
         state.res = null;
       });

       builder.addCase(resetProdCategoryState , ()=> initialState);
    }
})

export const prodCategoryReducer = prodCategorySlice.reducer;