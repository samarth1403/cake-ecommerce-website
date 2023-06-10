import React from 'react'
import locationIcon from '../../../../images/locationIcon.svg';
import Input from '../../../ReusableComponents/Input'

const PincodeCheck = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <div
        style={{
          background: "linear-gradient(90deg, #FCFF7E 0%, #FF9191 100%)",
        }}
        className="flex flex-row flex-wrap justify-center items-center w-[360px] lg:w-[900px] p-4 m-4 my-12 rounded-[30px]"
      >
        <img src={locationIcon} alt="location Icon" />
        <p className="font-roboto font-bold leading-normal text-2xl m-6">
          Enter Delivary Pincode
        </p>
        <Input
          className="bg-[#0D103C] text-[#fff] text-bold w-[300px] lg:w-[145px] h-[75px] px-4 m-2"
          id="pincode"
          type="number"
          placeholder="Pincode"
        />
        <button className="bg-[#fff] w-[300px] h-[75px] font-roboto font-bold text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-6 shadow-[6px_6px_2px_#0D103C]">
          Check
        </button>
      </div>
    </div>
  );
}

export default PincodeCheck;
