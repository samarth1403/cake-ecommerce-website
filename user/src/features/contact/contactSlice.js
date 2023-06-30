import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import contactService from "./contactService";

const initialState = {
  createdEnquiry: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  res: {},
};

export const createEnquiry = createAsyncThunk(
  "contact/create",
  async (data, thunkAPI) => {
    try {
      return await contactService.createEnquiry(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetContactState = createAction("reset/contactState");

const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
       builder.addCase(createEnquiry.pending, (state, action) => {
         state.isLoading = true;
       });
       builder.addCase(createEnquiry.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.isError = false;
         state.createdEnquiry = action.payload.createdEnquiry;
         state.res = action.payload.res;
         console.log(action.payload)
         if (state.res?.success && state.isSuccess && state.createdEnquiry) {
           toast.success("Contact form Submitted Successfully");
         }
       });
       builder.addCase(createEnquiry.rejected, (state, action) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
         state.createdEnquiry = null;
         state.message = action.error;
         if (state.res?.success === false && state.res?.message !== "") {
           toast.error(action.error);
         }
       });

       builder.addCase(resetContactState , ()=> initialState);
    }
})

export const contactReducer = contactSlice.reducer;