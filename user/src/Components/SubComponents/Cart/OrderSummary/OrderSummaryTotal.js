import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onSubmitTotalPrice } from "../../../../features/order/orderSlice";
import { ScrollToTop } from "../../../ReusableComponents/ScrollToTop";

const OrderSummaryTotal = () => {
  const [totalPriceWithoutDiscount, setTotalPriceWithoutDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch()
  const { gotCart } = useSelector((state) => {
    return state.user;
  });
  useEffect(() => {
    let totalSumWithoutDiscount = 0;
    let totalPrice = 0;
    for (let index = 0; index < gotCart?.length; index++) {
       totalSumWithoutDiscount +=
         Number(
           gotCart[index].price *
             gotCart[index].weight *
             gotCart[index].quantity
         ) +
         Number(
           gotCart[index].price *
             gotCart[index].weight *
             gotCart[index].quantity * 0.1
         );
      totalPrice += Number(
        gotCart[index].price * gotCart[index].weight * gotCart[index].quantity
      );
    }
    setTotalPrice(totalPrice);
    setTotalPriceWithoutDiscount(totalSumWithoutDiscount);
     dispatch(onSubmitTotalPrice(totalPrice));
  }, [gotCart]);

  return (
    <div>
      {totalPriceWithoutDiscount !== 0 || totalPriceWithoutDiscount !== null ? (
        <div
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C58AFF 0.02%, #E1C6FC 100%)",
          }}
          className="flex flex-col flex-wrap justify-center items-center w-[360px] md:w-[600px] rounded-[50px] m-8"
        >
          <p className="font-roboto font-bold text-[#0D103C] text-3xl m-8">
            Price Details
          </p>
          <div
            style={{
              background: "linear-gradient(90deg, #FFF177 0%, #FFFFFF 100%)",
            }}
            className="flex flex-row flex-no-wrap justify-between items-center w-[340px] md:w-[500px] rounded-[50px] p-4"
          >
            <div className="flex flex-col flex-no-wrap justify-start items-start">
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-4">
                Sub Total
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-4">
                Delivary Charge
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-4">
                ------------
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-3xl m-4">
                Total Cost
              </p>
            </div>
            <div className="flex flex-col flex-no-wrap justify-start items-start">
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-4">
                Rs {totalPrice?.toFixed(2)} /-
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-4">
                Free
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-4">
                ------------
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-3xl m-4">
                Rs. {totalPrice?.toFixed(2)}/-
              </p>
            </div>
          </div>
          <p className="font-roboto font-bold text-[#0D103C] text-2xl mx-8 mb-4 mt-8">
            You will save Rs.{" "}
            {(totalPriceWithoutDiscount - totalPrice)?.toFixed(2)}/- on this
            Order
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center m-4">
            <Link to="/shop-page" onClick={()=>ScrollToTop()}>
              <button className="bg-[#fff] w-[225px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-xl px-4 mx-4 mt-2 mb-4 shadow-[6px_6px_2px_#0D103C]">
                Continue Shopping
              </button>
            </Link>
            <Link to="/cart-page/contact-details" onClick={()=>ScrollToTop()}>
              <button className="bg-[#84FF58] w-[225px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-2 mb-4 shadow-[6px_6px_2px_#0D103C]">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        "Your Cart is Empty"
      )}
    </div>
  );
};

export default OrderSummaryTotal;
