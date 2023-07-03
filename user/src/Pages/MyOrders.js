import React, { useEffect } from "react";
import MyOrderItem from "./MyOrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../features/user/userSlice";

const MyOrders = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMyOrders());
  }, []);

  const { gotMyOrders } = useSelector((state) => {
    return state.user;
  });

  console.log(gotMyOrders);
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
      <p className="font-roboto font-bold text-[#fff] text-4xl m-6 mb-8">
        My Orders
      </p>
      {renderedMyOrdersList}
    </div>
  );
};

export default MyOrders;
