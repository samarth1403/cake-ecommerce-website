import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import ShopPage from "./Pages/ShopPage";
import CartPage from "./Pages/CartPage";
import NonEmptyCart from "./Components/SubComponents/Cart/NonEmptyCart/NonEmptyCart";
import ContactDetails from "./Components/SubComponents/Cart/ContactDetails/ContactDetails";
import ShippingDetails from "./Components/SubComponents/Cart/ShippingDetails/ShippingDetails";
import Congratulation from "./Components/SubComponents/Cart/Congratulation/Congratulation";
import MakePayment from "./Components/SubComponents/Cart/MakePayment/MakePayment";
import ContactUsPage from "./Pages/ContactUsPage";
import ForgotPassword from "./Components/SubComponents/Login/ForgotPassword/ForgotPassword";
import Login from "./Components/SubComponents/Login/Login";
import ResetPassword from "./Components/SubComponents/Login/ResetPassword/ResetPassword";
import ProductDetail from "./Components/SubComponents/ProductDetail/ProductDetail";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ShoppingList from "./Components/SubComponents/Shopping/ShoppingList";
import WishList from "./Components/SubComponents/Wishlist/WishList";
import BlogList from "./Components/SubComponents/Blogs/BlogList";
import Blog from "./Components/SubComponents/Blogs/Blog";
import { PrivateRoute } from "./routing/PrivateRoutes";
import MyOrders from "./Pages/MyOrders";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="product-details" element={<ProductDetailPage />}>
              <Route index element={<ShoppingList />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="about-page" element={<AboutPage />} />
            <Route path="login-page" element={<LoginPage />}>
              <Route index element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route path="shop-page" element={<ShopPage />} />
            <Route path="contact-us-page" element={<ContactUsPage />} />
            <Route
              path="wishlist-page"
              element={
                <PrivateRoute>
                  <WishList />
                </PrivateRoute>
              }
            />
            <Route
              path="cart-page"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            >
              <Route index element={<NonEmptyCart />} />
              <Route
                path="contact-details"
                element={
                  <PrivateRoute>
                    <ContactDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="shipping-details"
                element={
                  <PrivateRoute>
                    <ShippingDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="make-payment"
                element={
                  <PrivateRoute>
                    <MakePayment />
                  </PrivateRoute>
                }
              />
              <Route path="congratulation" element={<Congratulation />} />
            </Route>
            <Route path="blog-page" element={<BlogList />} />
            <Route path="blog-page/:id" element={<Blog />} />
            <Route
              path="/my-orders"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>
              }
            />
            <Route
              path="/my-profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
