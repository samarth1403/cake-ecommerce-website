import React, { useEffect } from "react";
import MyOrderItem from "./MyOrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../features/user/userSlice";
import EmptyCart from "../Components/SubComponents/Cart/EmptyCart/EmptyCart";

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
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-8" />
      </div>
      <div className="font-roboto font-bold text-4xl m-6 mb-8">
        {gotMyOrders?.length !== 0 ? (
          <div className="text-[#fff]">My Orders</div>
        ) : (
          <>
            <div className="font-roboto text-center font-bold text-4xl m-6 mb-8 text-[#fff]">
              You don't have any Orders
            </div>
            <EmptyCart />
          </>
        )}
      </div>
      {renderedMyOrdersList}
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-8 mb-16" />
      </div>
    </div>
  );
};

export default MyOrders;
