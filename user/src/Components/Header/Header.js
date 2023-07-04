import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import Navlink from './ReusableComponent/Navlink';
import person from '../../images/person.svg';
import cart from '../../images/cart.svg';
import heart from '../../images/HeartIcon.svg';
import { BsTelephoneFill, BsFillCartFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../features/user/userSlice';
import {useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const Header = () => {

  const navigate = useNavigate()

  const {gotCart, user, userData} = useSelector((state)=>{
    return state.user
  })

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/";
    navigate("/");
    toast.info("Logged Out Successfully")
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
          {/* <Link to="/blog-page">
            <Navlink href="/something" className="text-2xl">
              Blogs
            </Navlink>
          </Link> */}
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center w-[380px] h-[80px] mx-2">
          <Link to="/contact-us-page" className="my-2 mx-4">
            <BsTelephoneFill className="text-4xl text-[#D9D9D9]" />
          </Link>
          <Link to="/wishlist-page" className="my-2 mx-4">
            <AiFillHeart className="text-5xl text-red-400" />
          </Link>
          <Link
            to="/cart-page"
            type="button"
            className="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg"
          >
            <BsFillCartFill className="text-5xl text-[#FEE77A]" />
            {user !== null && gotCart?.length > 0 && (
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs text-black font-bold bg-white  border-2 border-white rounded-[5px] -top-2 -right-2 dark:border-gray-900">
                {gotCart?.length}
              </div>
            )}
          </Link>
          <Link
            to={user === null ? "/sign-in-page" : "/my-profile"}
            className="my-2 mx-4"
          >
            {user === null ? (
              <img src={person} alt="person icon" />
            ) : (
              <div className="w-[40px] h-[40px] bg-red-200 flex flex row justify-center items-center rounded-full">
                <p className="font-roboto font-bold text-xl text-center">
                  {user?.firstName?.substr(0, 1) + user?.lastName?.substr(0, 1)}
                </p>
              </div>
            )}
          </Link>
          {user !== null && (
            <button
              className="font-roboto font-bold text-xl text-center text-white mx-2"
              onClick={handleLogout}
            >
              <BiLogOut className="text-5xl text-[#D9D9D9]" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header
