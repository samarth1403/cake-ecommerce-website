import React from 'react'
import InputWithBorder from '../../../ReusableComponents/InputWithBorder';
import { Link } from 'react-router-dom';

const AddressDetails = () => {
  return (
    <div className="bg-[#0D103C]">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <p className="text-[#fff] font-roboto font-bold text-4xl m-8">
          2. Shipping Details
        </p>
        <form
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C898F8 0.02%, #8A16FD 100%)",
          }}
          className="w-[360px] lg:w-[600px] rounded-[25px] m-4 pt-6 flex flex-col flex-no-wrap justify-center items-center"
        >
          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
            id="address"
            type="text"
            placeholder="Flat, Floor, Building Name / House Name, Area, Station, etc *"
          />
          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
            id="landmark"
            type="text"
            placeholder="Area Name, Landmark, etc (optional)"
          />

          <div className="flex flex-row flex-wrap justify-center items-center">
            <InputWithBorder
              className="w-[135px] lg:w-[145px] h-[75px]"
              id="pincode"
              type="number"
              placeholder="Pincode"
            />
            <InputWithBorder
              className="w-[135px] lg:w-[145px] h-[75px]"
              id="city"
              type="text"
              placeholder="City"
            />
            <InputWithBorder
              className="w-[300px] lg:w-[145px] h-[75px]"
              id="state"
              type="text"
              placeholder="State"
            />
          </div>
          <Link to="/cart-page/make-payment">
            <button className="bg-[#84FF58] w-[300px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-6 shadow-[6px_6px_2px_#0D103C]">
              Proceed to Pay
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

export default AddressDetails
