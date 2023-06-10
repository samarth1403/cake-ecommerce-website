import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../../../ReusableComponents/Input';

const Signin = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start">
      <div className="flex flex-col flex-no-wrap justify-center items-center mx-8">
        <p className="font-roboto font-bold text-[#fff] text-4xl m-6">Log In</p>
        <form
          style={{
            background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
          }}
          className="flex flex-col flex-no-wrap justify-center items-center w-[360px] rounded-[25px] m-4 pt-6 "
        >
          <Input
            className="bg-[#0D103C] w-[300px] h-[75px] text-[#fff] px-4  m-4"
            id="email"
            type="text"
            placeholder="Email"
          />
          <Input
            className="bg-[#0D103C] w-[300px] h-[75px] text-[#fff] px-4 m-4"
            id="phoneNumber"
            type="number"
            placeholder="Phone Number"
          />
          <div className="flex flex-row flex-no-wrap justify-between items-center">
            <button
              // style={{
              //   background:
              //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              // }}
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] w-[135px] h-[75px] font-roboto font-bold  text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
            >
              Reset
            </button>
            <button
              // style={{
              //   background:
              //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              // }}
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] w-[135px] h-[75px] font-roboto font-bold  text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
            >
              Log In
            </button>
          </div>
          <Link to="/login-page/forgot-password">
            <p className="font-roboto font-medium text-[#0D10#C] text-xl mb-4">
              Forgot Password ?
            </p>
          </Link>
          <button
            // style={{
            //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
            // }}
            style={{ boxShadow: "8px 8px 4px #0D103C" }}
            className="bg-[#fff] w-[305px] h-[75px] font-roboto font-bold text-[#0D103C] rounded-[20px] text-2xl px-4 mx-4 mb-8"
          >
            Sign In With Google
          </button>
        </form>
      </div>
      {/* <div className="flex flex-col flex-no-wrap justify-center items-center">
          <p className="text-[#fff] font-roboto font-bold text-3xl m-4">
            Create Account
          </p>
          <div
            style={{
              background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
            }}
            className="w-[360px] rounded-[25px] mx-8 my-4 pt-6 flex flex-col flex-no-wrap justify-center items-center"
          >
            <p className="text-[#0D103C] font-roboto font-bold text-2xl m-4">
              Don't have an Account ?
            </p>
            <button
              style={{
                background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              }}
              className="w-[305px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
            >
              Create Account
            </button>
          </div>
        </div> */}
    </div>
  );
}

export default Signin
