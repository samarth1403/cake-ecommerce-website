import React from "react";
import ButtonRYG from '../../ReusableComponents/ButtonRYG';

const ShoppingItem = ({ shoppingItem }) => {
  return (
    <div
      className="flex flex-col flex-no-wrap flex-shrink-0 justify-start items-center w-[310px] h-auto rounded-[33px] mx-8 mb-16 mt-4"
      style={{
        background: "linear-gradient(180deg, #FAFAFA 46.2%, #101567 100%)",
      }}
    >
      <img
        src={shoppingItem.cakeImage}
        alt="Shopping Item"
        className="w-[310px] h-[310px] rounded-t-[33px] mb-2"
      />
      <div className="flex flex-col flex-no-wrap">
        <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 mt-3 m-1">
          {shoppingItem.cakeName}
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-lg px-2 m-1">
          Rs.{shoppingItem.cakePrice}/-
        </p>
        {/* <div className="text-[#0D103C] font-roboto font-bold text-lg px-4 m-1 ">
          Rating - {shoppingItem.cakeRating}/5
        </div> */}
        <div className="flex flex-row flex-no-wrap justify-between px-2 pt-3 pb-6">
          <ButtonRYG className="px-4 mr-4 py-2 rounded-[12px]">
            Add to Cart
          </ButtonRYG>
          <ButtonRYG className="px-4 ml-4 py-2 rounded-[12px] ">
            Buy Now
          </ButtonRYG>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
