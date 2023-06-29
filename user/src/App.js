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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="product-details" element={<ProductDetailPage/>}>
              <Route index element={<ShoppingList/>}/>
              <Route path=":id" element={<ProductDetail/>}/>
            </Route>
            <Route path="about-page" element={<AboutPage/>}/>
            <Route path="login-page" element={<LoginPage/>}>
              <Route index element={<Login/>}/>
              <Route path="forgot-password" element={<ForgotPassword/>}/>
              <Route path="reset-password" element={<ResetPassword/>}/>
            </Route>
            <Route path="shop-page" element={<ShopPage/>}/>
            <Route path="contact-page" element={<ContactUsPage/>}/>
            <Route path="cart-page" element={<CartPage/>}>
              <Route index element={<NonEmptyCart/>}/>
              <Route path="contact-details" element={<ContactDetails/>}/>
              <Route path="shipping-details" element={<ShippingDetails/>}/>
              <Route path="make-payment" element={<MakePayment/>}/>
              <Route path="congratulation" element={<Congratulation/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
