import React, { useEffect } from "react";
import MyOrderItem from "./MyOrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../features/user/userSlice";
import EmptyCart from "../Components/SubComponents/Cart/EmptyCart/EmptyCart";
import HoriLine from "../Components/ReusableComponents/HoriLine";

const MyOrders = () => {
  const dispatch = useDispatch();
  const {Token} = useSelector((state)=>state.user)
  
  useEffect(() => {
    dispatch(getMyOrders({ Token: Token }));
  }, []);

  const { gotMyOrders } = useSelector((state) => {
    return state.user;
  });

  const renderedMyOrdersList = gotMyOrders?.map((orderedProduct) => {
    return (
      <MyOrderItem key={orderedProduct._id} orderedProduct={orderedProduct} />
    );
  });
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <div className="font-roboto font-bold text-4xl py-6 mb-8">
        {gotMyOrders?.length !== 0 ? (
          <>
            <div className="text-[#fff] text-center my-4">My Orders</div>
            {renderedMyOrdersList}
            <HoriLine />
          </>
        ) : (
          <>
            <div className="font-roboto text-center font-bold text-3xl p-6 mb-8 text-[#fff]">
              You don't have any Orders
            </div>
            <EmptyCart />
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
