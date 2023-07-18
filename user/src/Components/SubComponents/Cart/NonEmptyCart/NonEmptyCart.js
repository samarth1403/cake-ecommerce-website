import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../EmptyCart/EmptyCart";
import OrderSummaryList from "../OrderSummary/OrderSummaryList";
import PincodeCheck from "../PincodeCheck/PincodeCheck";

const NonEmptyCart = () => {
  
  const { gotCart } = useSelector((state) => state.user);

  return (
    <>
      {gotCart?.length !== 0 ? (
        <div>
          {/* <PincodeCheck /> */}
          <OrderSummaryList />
          <div className="flex justify-center">
            <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-12 mb-16" />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default NonEmptyCart;
