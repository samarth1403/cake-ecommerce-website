import React from "react";
import minusIcon from "../../../../images/minusIcon.svg";
import plusIcon from "../../../../images/plusIcon.svg";

const OrderSummaryItem = ({ productInCart }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C58AFF 0.02%, #E1C6FC 100%)",
      }}
      className="flex flex-row flex-wrap justify-center lg:justify-between items-center w-[400px] sm:w-[500px] md:w-[700px] lg:w-[900px] rounded-[50px] m-4 p-4"
    >
      <img
        src={productInCart?.productId?.images[0]?.url}
        alt="Anniversary Cake"
        className="w-[230px] h-[230px] rounded-[30px] mt-2 mb-2"
      />
      <div className="flex flex-col flex-wrap justify-center items-start m-2">
        <p className="font-roboto font-bold text-[#0D103C] text-xl mx-4">
          {productInCart?.productId?.title}
        </p>
        <div className="flex flex-row justify-start items-center mx-4 my-2">
          <p className="font-roboto font-bold text-[#0D103C] text-xl">
            Quantity :
          </p>
          <img src={minusIcon} alt="Minus Icon" />
          <input
            id="quantity"
            value={productInCart?.quantity}
            className="w-[60px] h-[60px] sm:w-[75px] sm:h-[55px] m-2 rounded-[10px] bg-[#17F0BC] font-roboto font-bold text-2xl text-center"
          />
          <img src={plusIcon} alt="Minus Icon" />
        </div>
        <div className="flex flex-col justify-center items-start m-4">
          <p className="font-roboto font-bold text-[#0D103C] text-lg">
            Color : {productInCart?.color?.colorName}
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg">
            Weight : {productInCart?.weight} Kg
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg">
            Eggless : {productInCart?.veg}
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-lg">
            Shape : {productInCart?.shape}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-roboto font-bold text-[#0D103C] text-2xl mb-4">
          Rs. {productInCart?.price}/-
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-xl line-through mb-4">
          Rs. 799 /-
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-lg mb-4">
          (20 % Off)
        </p>
        <button className="bg-[#0D103C] font-roboto font-bold text-[#fff] text-xl px-4 py-2 mx-4 mt-8 mb-4 rounded-[10px]">
          Remove
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryItem;
