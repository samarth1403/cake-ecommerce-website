import React from 'react';
import { Link} from 'react-router-dom';
import Navlink from './ReusableComponent/Navlink';
import person from '../../images/person.svg';
import cart from '../../images/cart.svg';
const Header = () => {
  return (
    <nav>
      <div className="flex flex-row flex-wrap justify-evenly items-center bg-[#0D103C] max-w-full h-auto mx-auto px-6 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-row flex-wrap justify-between items-center w-[500px] h-[80px] ">
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
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center w-[200px] h-[80px] mx-8">
          <Link to="/login-page" className="m-2">
            <img src={person} alt="person icon" />
          </Link>
          <Link to="/cart-page" className="m-2">
            <img src={cart} alt="cart icon" />
          </Link>
        </div>
      </div>
      
    </nav>
  );
}

export default Header
