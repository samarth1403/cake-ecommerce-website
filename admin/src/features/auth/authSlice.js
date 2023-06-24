import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

const getUserFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = {
  user: getUserFromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  res:{},
};

//Creating Reducers
export const loginAdmin = createAsyncThunk("auth/admin-login",
   async(admin, thunkAPI)=>{
    try {
        return await authService.loginAdmin(admin);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
   })

export const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {},
    extraReducers : (builder) => {
    builder.addCase(loginAdmin.pending,(state)=>{
        state.isLoading = true;
    })
    builder.addCase(loginAdmin.fulfilled,(state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.res = action.payload.res;
    })
    builder.addCase(loginAdmin.rejected,(state , action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.res = null;
    })
    }
})

export const authReducer = authSlice.reducer