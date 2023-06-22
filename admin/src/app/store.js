import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authSlice';
import { prodCategoryReducer } from '../features/prodCategory/prodCategorySlice';
import { productReducer } from '../features/product/productSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
    reducer : {
        auth : authReducer,
        user : userReducer,
        product : productReducer,
        prodCategory : prodCategoryReducer,
    }
})