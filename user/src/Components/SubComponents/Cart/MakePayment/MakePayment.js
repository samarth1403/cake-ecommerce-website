import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  createOrder,
  emptyCart,
  getCart,
  paymentVerification,
  resetCreateOrder,
} from "../../../../features/user/userSlice";
import { config } from "../../../../utils/axiosConfig";
import { loadScript } from "../../../../utils/loadScript";
import logo from '../../../../images/DoneIcon.svg'
import { ScrollToTop } from "../../../ReusableComponents/ScrollToTop";

const MakePayment = () => {
  const [totalCost, setTotalCost] = useState();
  const [orderedProducts, setOrderedProducts] = useState();
  const navigate = useNavigate()

  const { contactInfo, shippingInfo, totalPrice } = useSelector((state) => {
    return state.order;
  });

  const { gotCart, paymentInfo, res, createdOrder, Token } = useSelector(
    (state) => {
      return state.user;
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart({Token:Token}));
  }, []);

  

  useEffect(() => {
    let totalPrice = 0;
    let items = [];
    for (let index = 0; index < gotCart?.length; index++) {
      totalPrice += Number(
        gotCart[index].price * gotCart[index].weight * gotCart[index].quantity
      );
      items.push({
        product: gotCart[index]?.productId?._id,
        quantity: gotCart[index]?.quantity,
        color: gotCart[index].color._id,
        price: gotCart[index]?.price,
        weight: gotCart[index]?.weight,
        shape: gotCart[index]?.shape,
        veg: gotCart[index]?.veg,
      });
    }
    setTotalCost(totalPrice);
    setOrderedProducts(items);
  }, [gotCart]);
 console.log(createdOrder);
  useEffect(()=>{
    if(createdOrder && res.success){
      dispatch(emptyCart({Token:Token}));
      navigate("/cart-page/congratulation");
      ScrollToTop();
      setTimeout(() => {
        dispatch(resetCreateOrder());
      }, 1000);
    }
    
  },[createdOrder])

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(
      "http://localhost:3001/api/user/order/checkout",
      { amount: totalCost },
      config
    );
    if (!result) {
      alert("Something went wrong");
      return;
    }
    // Getting the order details back
    const { amount, id: order_id, currency } = result.data.order;
    console.log(result?.data?.order);

    try {
      if(result?.data){
        const options = {
          key: "rzp_test_o0FyMR0OMCy1aR", // Enter the Key ID generated from the Dashboard
          amount: amount,
          currency: currency,
          name: "Samarth Ikkalaki",
          description: "Test Transaction",
          image: { logo },
          order_id: order_id,
          handler: async function (response) {
            const data = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
            };
            dispatch(
              createOrder({
                body: {
                  contactInfo,
                  shippingInfo,
                  totalPrice,
                  paymentInfo: data,
                  totalPriceAfterDiscount: totalPrice,
                  orderItems: orderedProducts,
                },
                Token: Token,
              })
            );
            dispatch(emptyCart({ Token: Token }));
          },
          prefill: {
            name: "Samarth Ikkalaki",
            email: "samarthikkalaki@example.com",
            contact: "7499355194",
          },
          notes: {
            address: "Samarth Ikkalaki Office",
          },
          theme: {
            color: "#61dafb",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    } catch (error) {
       return false;
    }

    
  };

  const renderedOrderSummaryList = gotCart?.map((item,index) => {
    return (
      <div className="mb-6" key={index}>
        <div className="flex flex-row flex-wrap justify-between items-center mx-2">
          <p className="font-roboto font-bold text-[#0D103C] text-2xl m-2">
            {item?.productId?.title}
          </p>
          <p className="font-roboto font-bold text-[#0D103C] text-2xl m-8">
            Rs. {item?.price * item?.quantity}/-
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center mx-2">
          <div className="flex flex-col">
            <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
              Qty : {item?.quantity}
            </p>
            <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
              Veg : {item?.veg}
            </p>
            <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
              Shape : {item?.shape}
            </p>
            <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
              color : {item?.color?.colorName}
            </p>
          </div>
          <img
            src={item?.productId?.images[0]?.url}
            alt="product"
            className="w-[200px] h-[200px] rounded-[30px]"
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C58AFF 0.02%, #E1C6FC 100%)",
          }}
          className="w-[360px] sm:w-[500px] md:w-[600px] rounded-[50px] m-4 p-4 m-8 p-6"
        >
          <p className="font-roboto font-bold text-[#0D103C] text-3xl text-left m-6">
            Order Summary
          </p>
          {renderedOrderSummaryList}
          <div className="flex flex-col flex-no-wrap justify-center items-center m-4">
            <p className="font-roboto font-bold text-[#0D103C] text-xl text-center m-4 ">
              -----------------------------------------------------------------------
            </p>
            <div className="flex flex-row flex-no-wrap justify-evenly items-center">
              <p className="font-roboto font-bold text-[#0D103C] text-3xl mr-16 sm:mr-24 m-2 ">
                Total Cost
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-3xl ml-16 sm:ml-24 m-2">
                Rs {totalCost} /-
              </p>
            </div>
            <button
              onClick={displayRazorpay}
              className="bg-[#84FF58] w-[300px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-6 shadow-[6px_6px_2px_#0D103C]"
            >
              Proceed to Pay
            </button>
            <Link to="/cart-page/congratulation"></Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
    </>
  );
};

export default MakePayment;

// const orderSummaryList = [
//   { itemName: "Yummylicious Delicious Cake", itemQuantity: 1, itemPrice: 599 },
//   { itemName: "Yummylicious Delicious Cake", itemQuantity: 1, itemPrice: 599 },
// ];
