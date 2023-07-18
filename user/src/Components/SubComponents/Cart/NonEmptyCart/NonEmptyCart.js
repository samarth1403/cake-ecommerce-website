import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HoriLine from "../../../ReusableComponents/HoriLine";
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
          <HoriLine/>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default NonEmptyCart;
