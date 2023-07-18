import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { getAllProducts } from "../../../../features/product/productSlice";
import { ScrollToTop } from "../../../ReusableComponents/ScrollToTop";

const OccasionItem = ({occasion}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(getAllProducts({category : e}));
    navigate("/shop-page");
    ScrollToTop();
  }

  return (
    <div className="px-6">
      <div
        style={{
          background: "linear-gradient(180deg, #00FFE0 0%, #DBFFFB 100%)",
        }}
        className="w-[240px] h-[160px] rounded-tr-[50.9338px] rounded-bl-[50.9338px] my-8"
      >
        <div className="flex flex-row flex-wrap justify-between items-start m-2">
          <div>
            <p className="w-[60px] font-roboto font-bold leading-normal text-[#0D103C] text-xl mx-4 my-2">
              {occasion?.occasionName}
            </p>
            <hr className="w-[60px] h-px bg-gray-500 border-0 dark:bg-gray-500 mx-4 my-4" />
            <button onClick={()=>handleClick(occasion?.occasionName)} className="bg-[#0D103C] font-roboto font-bold leading-normal text-[#fff] text-center text-sm rounded-[10px] mx-4 px-4 py-2">
              Shop Now
            </button>
          </div>

          <img
            src={occasion?.image}
            alt="occasion cake"
            className="bg-[#0D103C] w-[80px] h-[80px] rounded-full m-2"
          />
        </div>
      </div>
    </div>
  );
}

export default OccasionItem
