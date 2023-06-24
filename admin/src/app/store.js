import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authSlice';
import { blogReducer } from '../features/blog/blogSlice';
import { blogCategoryReducer } from '../features/blogCategory/blogCategorySlice';
import { colorCategoryReducer } from '../features/colorCategory/colorCategorySlice';
import { couponReducer } from '../features/coupon/couponSlice';
import { enquiryReducer } from '../features/enquiry/enquirySlice';
import { occasionReducer } from '../features/occasion/occasionSlice';
import { orderReducer } from '../features/order/orderSlice';
import { prodCategoryReducer } from '../features/prodCategory/prodCategorySlice';
import { productReducer } from '../features/product/productSlice';
import { uploadReducer } from '../features/upload/uploadSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    prodCategory: prodCategoryReducer,
    occasion: occasionReducer,
    blog: blogReducer,
    blogCategory: blogCategoryReducer,
    colorCategory: colorCategoryReducer,
    enquiry : enquiryReducer,
    coupon: couponReducer,
    order: orderReducer,
    upload: uploadReducer,
  },
});