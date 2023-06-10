import React from 'react'
import DoneIcon from '../../../../images/DoneIcon.svg';
const Congratulation = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap justify-center items-center m-8">
        <img src={DoneIcon} alt="Done Icon" />
        <div className="flex flex-col flex-wrap justify-center items-center m-8">
          <p className="font-roboto font-bold text-xl text-[#fff] text-center m-3">
            Hey , Samarth Ikkalaki
          </p>
          <p className="font-roboto font-bold text-3xl text-[#fff] text-center m-3">
            Your Order Is Completed !!
          </p>
          <p className="font-roboto font-bold text-xl text-[#fff] text-center m-3">
            You will be receiving a confirmation mail with order details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Congratulation
