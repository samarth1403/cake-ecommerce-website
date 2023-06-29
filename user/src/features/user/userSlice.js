import { createSlice , createAsyncThunk, createAction } from "@reduxjs/toolkit";
import userService from "./userService";
import {toast} from 'react-toastify';

const initialState = {
    user:"",
    isLoading : false,
    isSuccess : false,
    isError : false,
    message:"",
    res : {}
}

export const registerUser = createAsyncThunk("user/register",async(data, thunkAPI) => {
    try {
        return await userService.registerUser(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetUserState = createAction("reset/userState");

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers : (builder) => {
      builder.addCase(registerUser.pending,(state)=>{
        state.isLoading = true;
      })
      builder.addCase(registerUser.fulfilled,(state, action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.registeredUser = action.payload?.registeredUser;
        state.res = action.payload.res;
        if (state.res?.success && state.isSuccess && state.registeredUser) {
          toast.info("Registered Successfully");
        }
        if (state.res?.success === false && state.res?.message !== "") {
          toast.error("User is Already Registered with this Email ID");
        }
      })
      builder.addCase(registerUser.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError) {
          toast.error(action.error);
        }
      })

      builder.addCase(resetUserState, ()=> initialState);
    }
})

export const userReducer = userSlice.reducer;