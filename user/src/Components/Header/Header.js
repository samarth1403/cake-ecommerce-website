import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import Navlink from './ReusableComponent/Navlink';
import person from '../../images/person.svg';
import cart from '../../images/cart.svg';
import heart from '../../images/HeartIcon.svg';
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../features/user/userSlice';

const Header = () => {

  const {gotCart, user, userData} = useSelector((state)=>{
    return state.user
  })

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <nav>
      <div className="flex flex-row flex-wrap justify-evenly items-center bg-[#0D103C] max-w-full h-auto mx-auto px-6 py-6 sm:px-6 lg:px-4">
        <div className="flex flex-row flex-wrap justify-between items-center w-[600px] h-[80px] ">
          <Link to="/about-page">
            <Navlink href="/something" className="text-2xl">
              About
            </Navlink>
          </Link>
          <Link to="/my-orders">
            <Navlink href="/something" className="text-2xl">
              My Orders
            </Navlink>
          </Link>
          <Link to="/">
            <Navlink href="/something" className="text-4xl">
              Cakes
            </Navlink>
          </Link>
          <Link to="/shop-page">
            <Navlink href="/something" className="text-2xl">
              Shop
            </Navlink>
          </Link>
          <Link to="/blog-page">
            <Navlink href="/something" className="text-2xl">
              Blogs
            </Navlink>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center w-[380px] h-[80px] mx-2">
          <Link to="/contact-us-page" className="my-2 mx-4">
            <BsTelephoneFill className="text-4xl text-[#D9D9D9]" />
          </Link>
          <Link to="/wishlist-page" className="my-2 mx-4">
            <img src={heart} alt="heart icon" />
          </Link>
          <Link
            to={user === null ? "/login-page" : "/my-profile"}
            className="my-2 mx-4"
          >
            {user === null ? (
              <img src={person} alt="person icon" />
            ) : (
              <div className="w-[40px] h-[40px] bg-red-200 flex flex row justify-center items-center rounded-full">
                <p className="font-roboto font-bold text-xl text-center">
                  {(user?.firstName).substr(0, 1) +
                    (user?.lastName).substr(0, 1)}
                </p>
              </div>
            )}
          </Link>
          <button className="font-roboto font-bold text-xl text-center text-white mx-2" onClick={handleLogout}>
            Logout
          </button>
          <Link
            to="/cart-page"
            type="button"
            class="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg"
          >
            <img src={cart} alt="person icon" />
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs text-black font-bold bg-white  border-2 border-white rounded-[5px] -top-2 -right-2 dark:border-gray-900">
              {gotCart?.length}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header
