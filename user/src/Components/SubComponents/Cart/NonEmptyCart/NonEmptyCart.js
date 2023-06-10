import React from 'react'
import OrderSummaryList from '../OrderSummary/OrderSummaryList'
import PincodeCheck from '../PincodeCheck/PincodeCheck'

const NonEmptyCart = () => {
  return (
    <>
      <PincodeCheck />
      <OrderSummaryList />
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] mt-12 mb-16" />
      </div>
    </>
  );
}

export default NonEmptyCart