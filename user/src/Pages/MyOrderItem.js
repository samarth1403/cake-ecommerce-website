import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import minusIcon from "../images/minusIcon.svg";
const OrderSummaryItem = ({ orderedProduct }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C58AFF 0.02%, #E1C6FC 100%)",
      }}
      className="min-[320px]:w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] rounded-[50px] p-2 pt-8 my-6"
    >
      <div className="w-[100%] flex flex-wrap sm:flex-row min-[320px]:flex-col sm:justify-between sm:items-center h-auto px-4">
        <p className="font-roboto font-bold text-[#0D103C] text-lg">
          Order Id : {`${orderedProduct?._id}`}
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-lg">
          Total Amount : {orderedProduct?.totalPrice}
        </p>
        <p className="font-roboto font-bold text-[#0D103C] text-lg">
          Status : {orderedProduct?.orderStatus}
        </p>
      </div>
      {orderedProduct?.orderItems?.map((item, index) => {
        return (
          <div key={index}>
            <p className="font-roboto font-bold text-[#0D103C] text-lg px-4 mt-2">
              Product - {index + 1}
            </p>
            <div className="w-[100%] flex flex-row flex-wrap justify-between px-4">
              <div className="flex flex-col min-[320px]:justify-center justify-between">
                <p className="font-roboto font-bold text-[#0D103C] text-lg">
                  {item?.product?.title}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-lg">
                  Quantity : {item?.quantity}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-lg">
                  Price : {item?.price}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-lg">
                  Weight : {item?.weight}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-lg">
                  Shape : {item?.shape}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-lg">
                  Veg : {item?.veg === true ? "True" : "False"}
                </p>
              </div>
              <img
                src={item?.product?.images[0]?.url}
                alt=""
                className="w-[200px] h-[200px] rounded-[30px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderSummaryItem;
