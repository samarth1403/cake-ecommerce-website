import React from 'react'
import InputWithBorder from '../../../ReusableComponents/InputWithBorder'
import {Link} from 'react-router-dom';

const ContactDetails = () => {
  return (
    <div className="bg-[#0D103C]">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <p className="text-[#fff] font-roboto font-bold text-4xl m-8">
          1. Contact Details
        </p>
        <form
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C898F8 0.02%, #8A16FD 100%)",
          }}
          className="w-[360px] lg:w-[600px] rounded-[25px] m-4 pt-6 flex flex-col flex-no-wrap justify-center items-center"
        >
          <div className="flex flex-row flex-no-wrap justify-between items-center">
            <InputWithBorder
              className="w-[135px] lg:w-[230px] h-[75px]"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
            <InputWithBorder
              className="w-[135px] lg:w-[230px] h-[75px]"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
            id="email"
            type="text"
            placeholder="Email"
            style={{ color: "#0D103C" }}
          />
          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
            id="phoneNumber"
            type="number"
            placeholder="Phone Number"
          />
          <Link to="/cart-page/shipping-details">
            <button className="bg-[#84FF58] w-[300px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-6 shadow-[6px_6px_2px_#0D103C]">
              Continue
            </button>
          </Link>
        </form>
      </div>
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
    </div>
  );
}

export default ContactDetails
