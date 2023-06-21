import React from 'react'
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import ForgotpasswordPage from './Pages/ForgotpasswordPage';
import ResetpasswordPage from './Pages/ResetpasswordPage';
import MainLayout from './Components/MainLayout';
import DashboardPage from './Pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/forgot-password' element={<ForgotpasswordPage/>}/>
        <Route path='/reset-password' element={<ResetpasswordPage/>}/>
        <Route path='/admin' element={<MainLayout/>}>
          <Route index element={<DashboardPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App