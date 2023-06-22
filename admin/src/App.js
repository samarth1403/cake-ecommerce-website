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
import ColorListPage from './Pages/ColorListPage';
import ProdCategoryListPage from './Pages/ProdCategoryListPage';
import OccasionListPage from './Pages/OccasionListPage';
import AddBlogPage from './Pages/AddBlogPage';
import AddColorPage from './Pages/AddColorPage';
import AddOccasionPage from './Pages/AddOccasionPage';
import AddProdCategoryPage from "./Pages/AddProdCategoryPage";
import AddProductPage from './Pages/AddProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotpasswordPage />} />
        <Route path="/reset-password" element={<ResetpasswordPage />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="enquiries" element={<EnquiriesPage />} />
          <Route path="blog-list" element={<BlogsListPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="all-products" element={<ProductListPage />} />
          <Route path="color-list" element={<ColorListPage />} />
          <Route
            path="all-product-categories"
            element={<ProdCategoryListPage/>}
          />
          <Route path="occasion-list" element={<OccasionListPage />} />
          <Route path="add-blog" element={<AddBlogPage />} />
          <Route path="add-color" element={<AddColorPage />} />
          <Route path="add-occasion" element={<AddOccasionPage />} />
          <Route path="add-product-category" element={<AddProdCategoryPage />} />
          <Route path="add-product" element={<AddProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App