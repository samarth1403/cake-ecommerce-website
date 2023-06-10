import React from 'react'
import { Link } from 'react-router-dom';

const MakePayment = () => {

    const renderedOrderSummaryList = orderSummaryList.map((orderSummaryItem)=>{
        return (
          <div className="flex flex-col flex-no-wrap justify-center items-center m-4">
            <div className="flex flex-row flex-no-wrap justify-between items-center">
              <div className="flex flex-col flex-wrap justify-center items-start">
                <p className="font-roboto font-bold text-[#0D103C] text-2xl m-2">
                  {orderSummaryItem.itemName}
                </p>
                <p className="font-roboto font-bold text-[#0D103C] text-xl m-2">
                  Qty : {orderSummaryItem.itemQuantity}
                </p>
              </div>
              <p className="font-roboto font-bold text-[#0D103C] text-2xl m-8">
                Rs. {orderSummaryItem.itemPrice}/-
              </p>
            </div>
          </div>
        );
    })
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
          <div className="flex flex-col flex-no-wrap justify-center items-center m-4">
            {renderedOrderSummaryList}
            <p className="font-roboto font-bold text-[#0D103C] text-xl text-center m-4 ">
              -----------------------------------------------------------------------
            </p>
            <div className="flex flex-row flex-no-wrap justify-evenly items-center">
              <p className="font-roboto font-bold text-[#0D103C] text-3xl mr-16 sm:mr-24 m-2 ">
                Total Cost
              </p>
              <p className="font-roboto font-bold text-[#0D103C] text-3xl ml-16 sm:ml-24 m-2">
                Rs. 599/-
              </p>
            </div>
            <Link to="/cart-page/congratulation">
              <button className="bg-[#84FF58] w-[300px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-6 shadow-[6px_6px_2px_#0D103C]">
                Proceed to Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
    </>
  );
}

export default MakePayment

const orderSummaryList = [
  { itemName: "Yummylicious Delicious Cake", itemQuantity: 1, itemPrice: 599 },
  { itemName: "Yummylicious Delicious Cake", itemQuantity: 1, itemPrice: 599 },
];
