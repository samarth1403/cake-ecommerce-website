import React from "react";
import Input from "../Components/ReusableComponents/Input";

const ResetPasswordPage = () => {
  return (
    <div className="bg-[#0D103C] h-[100vh] flex flex-col flex-no-wrap justify-center items-center">
      <p className="font-roboto font-bold text-[#fff] text-3xl m-6 text-center">
        Enter your new Password
      </p>
      <form
        style={{
          background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
        }}
        className="flex flex-col flex-no-wrap justify-center items-center w-[360px] sm:w-[400px] rounded-[25px] m-4 pt-6 "
      >
        <Input
          className="bg-[#0D103C] w-[300px] sm:w-[360px] h-[75px] text-[#fff] px-4 m-4"
          id="password"
          type="password"
          placeholder="New Password"
        />
        <Input
          className="bg-[#0D103C] w-[300px] sm:w-[360px] h-[75px] text-[#fff] px-4 m-4"
          id="confirm-password"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          // style={{
          //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
          // }}
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[200px] h-[75px] font-roboto font-bold text-[#0D103C] rounded-[20px] text-2xl px-4 mx-4 mt-4 mb-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
