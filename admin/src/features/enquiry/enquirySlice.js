import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
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
})

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
        state.res = action.payload.res;
      });
    }
})

export const enquiryReducer = enquirySlice.reducer;