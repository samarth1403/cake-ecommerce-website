import React,{useEffect} from 'react';
import Birthday from '../../../../images/Birthday.webp';
import OrderSummaryItem from './OrderSummaryItem';
import OrderSummaryTotal from './OrderSummaryTotal';
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../../features/user/userSlice";

const OrderSummaryList = () => {
  
  const dispatch = useDispatch();
  const {user,Token} = useSelector((state)=>{
    return state.user
  })

  useEffect(() => {
    getUserCart();
  }, []);
  
  const getUserCart = () => {
     if (Token !== undefined) {
       dispatch(getCart({ Token: Token }));
     }
  };

  const {gotCart} = useSelector((state)=>{
    return state.user
  })

    const renderedOrderSummaryList = gotCart?.map((productInCart) => {
      return (
        <OrderSummaryItem
          key={productInCart._id}
          productInCart={productInCart}
        />
      );
    });
    
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      {/* <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-8" />
      </div> */}
      <p className="font-roboto font-bold text-[#fff] text-4xl m-6 mb-8">
        Order Summary
      </p>
      {renderedOrderSummaryList}
      {gotCart?.length !== 0 ?  <OrderSummaryTotal /> : "" }
    </div>
  );
}

export default OrderSummaryList