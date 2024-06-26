import React from 'react'
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import ForgotpasswordPage from './Pages/ForgotpasswordPage';
import ResetpasswordPage from './Pages/ResetpasswordPage';
import MainLayout from './Components/MainLayout';
import DashboardPage from './Pages/DashboardPage';
import EnquiriesPage from './Pages/EnquiriesPage';
import BlogsListPage from './Pages/BlogsListPage';
import OrdersPage from './Pages/OrdersPage';
import CustomersPage from './Pages/CustomersPage';
import ProductListPage from './Pages/ProductListPage';
import ProdCategoryListPage from './Pages/ProdCategoryListPage';
import OccasionListPage from './Pages/OccasionListPage';
import AddBlogPage from './Pages/AddBlogPage';
import AddColorPage from './Pages/AddColorPage';
import AddOccasionPage from './Pages/AddOccasionPage';
import AddProdCategoryPage from "./Pages/AddProdCategoryPage";
import AddProductPage from './Pages/AddProductPage';
import BlogCategoryListPage from './Pages/BlogCategoryListPage';
import ColorCategoryListPage from './Pages/ColorCategoryListPage';
import CouponListPage from './Pages/CouponListPage';
import AddBlogCategoryPage from './Pages/AddBlogCategoryPage';
import AddCouponPage from './Pages/AddCouponPage';
import ViewEnquiryPage from './Pages/ViewEnquiryPage';
import ViewProducts from './Pages/ViewProducts';
import { OpenRoute } from './routing/OpenRoutes';
import { PrivateRoute } from './routing/PrivateRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <OpenRoute>
              <LoginPage />
            </OpenRoute>
          }
        />
        {/* <Route path="/forgot-password" element={<ForgotpasswordPage />} />
        <Route path="/reset-password" element={<ResetpasswordPage />} /> */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="enquiries" element={<EnquiriesPage />} />
          <Route path="enquiries/:id" element={<ViewEnquiryPage />} />
          <Route path="all-blogs" element={<BlogsListPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="order/:id" element={<ViewProducts />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="all-products" element={<ProductListPage />} />
          <Route
            path="all-product-categories"
            element={<ProdCategoryListPage />}
          />
          <Route
            path="all-blog-categories"
            element={<BlogCategoryListPage />}
          />
          <Route path="all-colors" element={<ColorCategoryListPage />} />
          <Route path="all-coupons" element={<CouponListPage />} />
          <Route path="all-occasions" element={<OccasionListPage />} />
          <Route path="add-blog" element={<AddBlogPage />} />

          <Route path="add-blog/:id" element={<AddBlogPage />} />
          <Route path="add-color" element={<AddColorPage />} />
          {/* the following route is for update color */}
          <Route path="add-color/:id" element={<AddColorPage />} />
          <Route path="add-occasion" element={<AddOccasionPage />} />
          {/* the following route is for update occasion */}
          <Route path="add-occasion/:id" element={<AddOccasionPage />} />
          <Route
            path="add-product-category"
            element={<AddProdCategoryPage />}
          />
          {/* the following route is for update product-category */}
          <Route
            path="add-product-category/:id"
            element={<AddProdCategoryPage />}
          />
          <Route path="add-blog-category" element={<AddBlogCategoryPage />} />
          {/* the following route is for update blog-category */}
          <Route
            path="add-blog-category/:id"
            element={<AddBlogCategoryPage />}
          />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="add-product/:id" element={<AddProductPage />} />
          <Route path="add-coupon" element={<AddCouponPage />} />
          {/* the following route is for update coupon */}
          <Route path="add-coupon/:id" element={<AddCouponPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App