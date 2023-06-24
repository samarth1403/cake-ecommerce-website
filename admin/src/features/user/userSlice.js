import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import userService from './userService';

export const getAllUsers = createAsyncThunk("user/all-users",async(thunkAPI) => {
    try {
        return await userService.getAllUsers();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const initialState = {
    users : [],
    isLoading : false,
    isError : false,
    isSuccess : false,
    res : {},
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getAllUsers.pending, (state , action) => {
            state.isLoading = true;
        })
        builder.addCase(getAllUsers.fulfilled , (state , action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.users = action.payload.users;
            state.res = action.payload.res;
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.users = null;
          state.res = null;
        });
    }
})

export const userReducer = userSlice.reducer;