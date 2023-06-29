import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

const getCustomerFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
  user: getCustomerFromLocalStorage,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  res: {},
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      return await userService.registerUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      return await userService.loginUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getWishlistOfUser = createAsyncThunk(
  "user/wishlist/get",
  async (thunkAPI) => {
    try {
      return await userService.getWishlistOfUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetUserState = createAction("reset/userState");

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.registeredUser = action.payload?.registeredUser;
      state.res = action.payload?.res;
      if (state.res?.success && state.isSuccess && state.registeredUser) {
        toast.info("Registered Successfully");
      }
      if (state.res?.success === false && state.res?.message !== "") {
        toast.error("User is Already Registered with this Email ID");
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      if (state.isError) {
        toast.error(action.error);
      }
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.userData = action.payload?.userData;
      state.res = action.payload?.res;
      if (state.res?.success && state.isSuccess && state.userData) {
        localStorage.setItem(
          "customer",
          JSON.stringify(action.payload?.userData)
        );
        toast.success(`Welcome ${action.payload?.userData?.firstName}`);
      }
      if (state.res?.success === false && state.res?.message !== "") {
        toast.error("Invalid Credentials");
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      if (state.isError) {
        toast.error(action.error);
      }
    });

    builder.addCase(getWishlistOfUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWishlistOfUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.gotWishlistOfUser = action.payload?.gotWishlistOfUser;
      state.res = action.payload?.res;
    });
    builder.addCase(getWishlistOfUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
    });

    builder.addCase(resetUserState, () => initialState);
  },
});

export const userReducer = userSlice.reducer;
