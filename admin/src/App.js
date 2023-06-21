import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/Forgotpassword";
import Resetpassword from "./Pages/Resetpassword";
import Mainlayout from "./Components/Mainlayout";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password" element={<Resetpassword/>}/>
      <Route path="/admin" element={<Mainlayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
  </Router>;
};

export default App;
