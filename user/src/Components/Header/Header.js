import React from 'react';
import { Link} from 'react-router-dom';
import Navlink from './ReusableComponent/Navlink';
import person from '../../images/person.svg';
import cart from '../../images/cart.svg';
import heart from '../../images/HeartIcon.svg';
import { BsTelephoneFill } from "react-icons/bs";
const Header = () => {
  return (
    <nav>
      <div className="flex flex-row flex-wrap justify-evenly items-center bg-[#0D103C] max-w-full h-auto mx-auto px-6 py-6 sm:px-6 lg:px-4">
        <div className="flex flex-row flex-wrap justify-between items-center w-[600px] h-[80px] ">
          <Link to="/about-page">
            <Navlink href="/something" className="text-2xl">
              About
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
        <div className="flex flex-row flex-wrap justify-between items-center w-[350px] h-[80px] mx-2">
          <Link to="/contact-us-page" className="my-2 mx-4">
            <BsTelephoneFill className="text-4xl text-[#D9D9D9]" />
          </Link>
          <Link to="/wishlist-page" className="my-2 mx-4">
            <img src={heart} alt="heart icon" />
          </Link>
          <Link to="/login-page" className="my-2 mx-4">
            <img src={person} alt="person icon" />
          </Link>
          <Link to="/cart-page" className="my-2 mx-4">
            <img src={cart} alt="cart icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header
