import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from '../features/blog/blogSlice';
import { productReducer } from '../features/product/productSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    blog: blogReducer,
  },
});
