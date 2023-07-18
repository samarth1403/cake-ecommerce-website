import React from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../ReusableComponents/ScrollToTop";

const FooterSignup = () => {
  return (
    <div
      style={{ background: "linear-gradient(90deg, #FF6262 0%, #FEE77A 100%)" }}
      className="flex flex-col flex-wrap justify-center items-center rounded-[40px] w-[250px] my-8"
    >
      <p className="font-roboto font-bold leading-normal text-[#0D103C] text-xl text-center px-8 pt-4">
        Treat your inbox to sweet deals and tasty updates.
      </p>
      <form className="flex flex-row flex-wrap justify-center items-center">
        {/* <InputForForm id="email" type="text" placeholder="Email" />
        <InputForForm
          id="phoneNumber"
          type="number"
          placeholder="Phone Number"
        /> */}
        <Link to="/sign-in-page" onClick={() => ScrollToTop()}>
          <button
            // style={{
            //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
            // }}
            className="bg-[#0D103C] w-[150px] h-[75px] font-roboto font-bold text-[#fff] text-xl rounded-[20px] px-4 mx-4 mb-6 mt-4"
          >
            Log In
          </button>
        </Link>
        <Link to="/sign-up-page" onClick={() => ScrollToTop()}>
          <button
            // style={{
            //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
            // }}
            className="bg-[#0D103C] w-[150px] h-[75px] font-roboto font-bold text-[#fff] text-xl rounded-[20px] px-4 mx-4 mb-6 mt-4"
          >
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
};

export default FooterSignup;
