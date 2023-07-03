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

export const addToCart = createAsyncThunk("user/cart/create", async (data, thunkAPI) => {
  try {
    return await userService.addToCart(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getCart = createAsyncThunk(
  "user/cart/get",
  async (thunkAPI) => {
    try {
      return await userService.getCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProductFromCart = createAsyncThunk(
  "user/cart/delete-product",
  async (id, thunkAPI) => {
    try {
      return await userService.deleteProductFromCart(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateQuantityFromCart = createAsyncThunk(
  "user/cart/update-quantity",
  async ({cartProductId,quantityFromCart}, thunkAPI) => {
    console.log({ cartProductId, quantityFromCart });
    try {
      return await userService.updateQuantityFromCart({
        cartProductId,
        quantityFromCart,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createOrder = createAsyncThunk(
  "user/cart/create-order",
  async (orderDetails, thunkAPI) => {
    try {
      return await userService.createOrder(orderDetails);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getMyOrders = createAsyncThunk(
  "user/cart/get-my-orders",
  async (thunkAPI) => {
    try {
      return await userService.getMyOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/update-user-profile",
  async (data, thunkAPI) => {
    try {
      return await userService.updateUserProfile(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetUserState = createAction("reset/userState");

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
  },
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
      state.user = action.payload?.userData;
      state.res = action.payload?.res;
      if (state.res?.success && state.isSuccess && state.userData) {
        
        localStorage.setItem(
          "customer",
          JSON.stringify(action.payload?.userData)
        );
        toast.success(`Welcome ${action.payload?.userData?.firstName}`);
      }
      if (state.res?.success === false && state.res?.message !== "") {
        state.user = null;
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


    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.createdCart = action.payload?.createdCart;
      state.res = action.payload?.res;
      if (state.res.success && state.createdCart) {
        toast.success("Product Added to Cart Successfully");
      }
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      if (state.isError) {
        toast.success("Something Went Wrong");
      }
    });

    builder.addCase(getCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.gotCart = action.payload?.gotCart;
      state.res = action.payload?.res;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      if (state.isError) {
        toast.success("Something Went Wrong");
      }
    });

    builder.addCase(deleteProductFromCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.deletedProductFromCart = action.payload?.deletedProductFromCart;
      state.res = action.payload?.res;
      if(state.res.success && state.isSuccess){
        toast.success("Product removed from Cart Successfully");
      }
    });
    builder.addCase(deleteProductFromCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      if (state.isError) {
        toast.error("Something Went Wrong");
      }
    });

     builder.addCase(updateQuantityFromCart.pending, (state) => {
       state.isLoading = true;
     });
     builder.addCase(updateQuantityFromCart.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.isError = false;
       state.updatedProduct = action.payload?.updatedProduct;
       state.res = action.payload?.res;
       console.log(state.updatedProduct);
       if (state.updatedProduct) {
         toast.success("Quantity Updated Successfully");
       }
     });
     builder.addCase(updateQuantityFromCart.rejected, (state, action) => {
       state.isLoading = false;
       state.isError = true;
       state.isSuccess = false;
       state.message = action.error;
       if (state.isError) {
         toast.error("Something Went Wrong");
       }
     });

     builder.addCase(createOrder.pending, (state) => {
       state.isLoading = true;
     });
     builder.addCase(createOrder.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.isError = false;
       state.createdOrder = action.payload?.createdOrder;
       state.res = action.payload?.res;
       console.log(state.updatedProduct);
       if (state.updatedProduct) {
         toast.success("Order Created Successfully");
       }
     });
     builder.addCase(createOrder.rejected, (state, action) => {
       state.isLoading = false;
       state.isError = true;
       state.isSuccess = false;
       state.message = action.error;
       if (state.isError) {
         toast.error("Something Went Wrong");
       }
     });

     builder.addCase(getMyOrders.pending, (state) => {
       state.isLoading = true;
     });
     builder.addCase(getMyOrders.fulfilled, (state, action) => {
       state.isLoading = false;
       state.isSuccess = true;
       state.isError = false;
       state.gotMyOrders = action.payload?.gotMyOrders;
       state.res = action.payload?.res;
       if (state.updatedProduct) {
         toast.success("My orders Got Successfully");
       }
     });
     builder.addCase(getMyOrders.rejected, (state, action) => {
       state.isLoading = false;
       state.isError = true;
       state.isSuccess = false;
       state.message = action.error;
       if (state.isError) {
         toast.error("Something Went Wrong");
       }
     });

          builder.addCase(updateUserProfile.pending, (state) => {
            state.isLoading = true;
          });
          builder.addCase(updateUserProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.updatedUser = action.payload?.updatedUser;
            state.user = action.payload?.updatedUser;
            state.res = action.payload?.res;
            if (state.updatedUser && state.res.success) {
              toast.success("Profile Updated Successfully");
            }
          });
          builder.addCase(updateUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError) {
              toast.error("Something Went Wrong");
            }
          });

    builder.addCase(resetUserState, () => initialState);
  },
});

export const userReducer = userSlice.reducer;
