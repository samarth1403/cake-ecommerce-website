import React from "react";
import { Link } from "react-router-dom";
import EmptyCartIcon from "../../../../images/EmptyCartIcon.svg";
import { ScrollToTop } from "../../../ReusableComponents/ScrollToTop";

const EmptyCart = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <img src={EmptyCartIcon} alt="Empty Cart Icon" />
      <div
        style={{
          background: "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
        }}
        className="w-[360px] md:w-[500px] lg:w-[600px] rounded-[30px] mt-12 mx-8 mb-8 "
      >
        <p className="font-roboto font-bold text-2xl text-center leading-normal m-8">
          "Forget window shopping, let's turn your craving into reality. Let's
          explore the bakery and indulge in something extraordinary!"
        </p>
      </div>
      <Link to="/shop-page" onClick={()=>ScrollToTop()}>
        <button className="bg-[#FFF960] w-[300px] font-roboto font-bold text-2xl rounded-[20px] m-4 p-4">
          Browse Sweets
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
