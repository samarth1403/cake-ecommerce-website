import { createSlice , createAsyncThunk, createAction } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";

const initialState = {
    enquiries : [],
    isLoading : false,
    isSuccess : false,
    isError : false,
    res : {},
}

export const getAllEnquiries = createAsyncThunk("enquiry/all-enquiries",async(thunkAPI) => {
    try {
        return await enquiryService.getAllEnquiries();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getEnquiry = createAsyncThunk(
  "enquiry/get",
  async (id, thunkAPI) => {
    try {
      return await enquiryService.getEnquiry(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateEnquiry = createAsyncThunk(
  "enquiry/update",
  async (data, thunkAPI) => {
    try {
      return await enquiryService.updateEnquiry(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const deleteEnquiry = createAsyncThunk(
  "enquiry/delete",
  async (id, thunkAPI) => {
    try {
      return await enquiryService.deleteEnquiry(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetEnquiryState = createAction("reset/enquiryState");

const enquirySlice = createSlice({
    name : "enquiry",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
      builder.addCase(getAllEnquiries.pending,(state, action) => {
        state.isLoading = true;
      })
      builder.addCase(getAllEnquiries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.enquiries = action.payload.enquiries;
        state.res = action.payload.res;
      });
      builder.addCase(getAllEnquiries.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.enquiries = null;
        state.res = null;
      });

      builder.addCase(getEnquiry.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(getEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.gotEnquiry = action.payload.gotEnquiry;
        state.res = action.payload.res;
      });
      builder.addCase(getEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.res = null;
      });

      builder.addCase(updateEnquiry.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(updateEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updatedEnquiry = action.payload.updatedEnquiry;
        state.res = action.payload.res;
      });
      builder.addCase(updateEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.res = null;
      });

      builder.addCase(deleteEnquiry.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(deleteEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.deletedEnquiry = action.payload.deletedEnquiry;
        state.res = action.payload.res;
      });
      builder.addCase(deleteEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        state.res = null;
      });

      builder.addCase(resetEnquiryState,()=>initialState);
    }
})

export const enquiryReducer = enquirySlice.reducer;