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
import Signup from "./Components/SubComponents/Login/Signup/Signup";
import Signin from "./Components/SubComponents/Login/Signin/Signin";
import UnderContructionPage from "./Pages/UnderContructionPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route key="layout" path="/" element={<Layout />}>
            <Route key="/" index element={<HomePage />} />
            <Route
              key="under-construction-page"
              path="under-construction-page"
              element={<UnderContructionPage />}
            />
            <Route
              key="/product-details"
              path="product-details"
              element={<ProductDetailPage />}
            >
              <Route
                key="/product-details/index"
                index
                element={<ShoppingList />}
              />
              <Route
                key="/product-details?:id"
                path=":id"
                element={<ProductDetail />}
              />
            </Route>
            <Route key="about-page" path="about-page" element={<AboutPage />} />
            <Route
              key="sign-up-page"
              path="sign-up-page"
              element={<Signup />}
            />
            <Route
              key="sign-in-page"
              path="sign-in-page"
              element={<Signin />}
            />
            <Route
              key="forgot-password"
              path="forgot-password"
              element={<ForgotPassword />}
            />
            <Route
              key="reset-password"
              path="reset-password/:token"
              element={<ResetPassword />}
            />
            <Route key="shop-page" path="shop-page" element={<ShopPage />} />
            <Route
              key="contact-us-page"
              path="contact-us-page"
              element={<ContactUsPage />}
            />
            <Route
              key="wishlist-page"
              path="wishlist-page"
              element={
                <PrivateRoute>
                  <WishList />
                </PrivateRoute>
              }
            />
            <Route
              key="cart-page"
              path="cart-page"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            >
              <Route key="cart-page/index" index element={<NonEmptyCart />} />
              <Route
                key="contact-details"
                path="contact-details"
                element={
                  <PrivateRoute>
                    <ContactDetails />
                  </PrivateRoute>
                }
              />
              <Route
                key="shipping-details"
                path="shipping-details"
                element={
                  <PrivateRoute>
                    <ShippingDetails />
                  </PrivateRoute>
                }
              />
              <Route
                key="make-payment"
                path="make-payment"
                element={
                  <PrivateRoute>
                    <MakePayment />
                  </PrivateRoute>
                }
              />
              <Route
                key="congratulation"
                path="congratulation"
                element={<Congratulation />}
              />
            </Route>
            <Route key="blog-page" path="blog-page" element={<BlogList />} />
            <Route
              key="blog-page/:id"
              path="blog-page/:id"
              element={<Blog />}
            />
            <Route
              key="my-orders"
              path="/my-orders"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>
              }
            />
            <Route
              key="my-profile"
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
