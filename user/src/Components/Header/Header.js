import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import Navlink from './ReusableComponent/Navlink';
import person from '../../images/person.svg';
import cart from '../../images/cart.svg';
import heart from '../../images/HeartIcon.svg';
import { BsTelephoneFill, BsFillCartFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getWishlistOfUser } from '../../features/user/userSlice';
import {useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { ScrollToTop } from '../ReusableComponents/ScrollToTop';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {Token} = useSelector((state)=>state.user)

  const { gotCart, user,deletedCart, userData, gotWishlistOfUser } = useSelector(
    (state) => {
      return state.user;
    }
  );

   const { updatedUser,} = useSelector((state) => {
     return state.product;
   });

  useEffect(() => {
    console.log(Token)
    if(Token !== undefined){
      console.log(Token);
      dispatch(getCart({ Token: Token }));
      dispatch(getWishlistOfUser({ Token: Token }));
    }

  }, [updatedUser, deletedCart]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/";
    navigate("/");
    toast.info("Logged Out Successfully")
  }

  return (
    <nav>
      <div className="flex flex-row flex-wrap justify-evenly items-center bg-[#0D103C] max-w-full h-auto mx-auto px-6 py-6 sm:px-6 lg:px-4 ">
        <div className="flex flex-row flex-wrap min-[320px]:justify-center sm:justify-between items-center w-[500px] h-[80px] min-[320px]:mb-8 sm:mb-0">
          <Link to="/" onClick={() => ScrollToTop()}>
            <Navlink href="/something" className="text-4xl">
              Cakes
            </Navlink>
          </Link>
          <Link to="/my-orders" onClick={() => ScrollToTop()}>
            <Navlink href="/something" className="text-2xl">
              My Orders
            </Navlink>
          </Link>

          <Link to="/shop-page" onClick={() => ScrollToTop()}>
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
        <div className="flex flex-row flex-wrap justify-between items-center min-[320px]:w-[300px] sm:w-[420px] h-[80px] mx-2 min-[320px]:mb-8 sm:mb-0">
          <Link
            to="/contact-us-page"
            className="my-2 mx-4"
            onClick={() => ScrollToTop()}
          >
            <BsTelephoneFill className="text-4xl text-[#D9D9D9]" />
          </Link>
          <Link
            onClick={() => ScrollToTop()}
            to="/wishlist-page"
            className="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg"
          >
            <AiFillHeart className="text-5xl text-red-400" />
            {user !== null && gotWishlistOfUser?.wishList?.length > 0 && (
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs text-black font-bold bg-white  border-2 border-white rounded-[5px] -top-0 -right-0 dark:border-gray-900">
                {gotWishlistOfUser?.wishList?.length}
              </div>
            )}
          </Link>
          <Link
            onClick={() => ScrollToTop()}
            to="/cart-page"
            type="button"
            className="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-lg"
          >
            <BsFillCartFill className="text-5xl text-[#FEE77A]" />
            {user !== null && gotCart?.length > 0 && (
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs text-black font-bold bg-white  border-2 border-white rounded-[5px] -top-0 -right-0 dark:border-gray-900">
                {gotCart?.length}
              </div>
            )}
          </Link>
          <Link
            onClick={() => ScrollToTop()}
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
              <BiLogOutCircle className="text-5xl text-[#D9D9D9]" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header
