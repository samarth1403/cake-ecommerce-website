import React from "react";
import InputForForm from "./ReusableComponent/InputForForm";

const FooterSignup = () => {
  return (
    <div
      style={{ background: "linear-gradient(90deg, #FF6262 0%, #FEE77A 100%)" }}
      className="flex flex-col flex-wrap justify-center items-center rounded-[40px] my-8 mx-12"
    >
      <p className="font-roboto font-bold leading-normal text-[#0D103C]  text-2xl text-center px-8 pt-4 m-4">
        Treat your inbox to sweet deals and tasty updates.
      </p>
      <form className="flex flex-row flex-wrap justify-center items-center">
        {/* <InputForForm id="email" type="text" placeholder="Email" />
        <InputForForm
          id="phoneNumber"
          type="number"
          placeholder="Phone Number"
        /> */}
        <button
          // style={{
          //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
          // }}
          className="bg-[#0D103C] w-[200px] h-[75px] font-roboto font-bold text-[#fff] text-2xl rounded-[20px] px-4 mx-4 mb-6 mt-4"
        >
          Log In
        </button>
        <button
          // style={{
          //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
          // }}
          className="bg-[#0D103C] w-[250px] h-[75px] font-roboto font-bold text-[#fff] text-2xl rounded-[20px] px-4 mx-4 mb-6 mt-4"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default FooterSignup;
