import React from 'react'
import Input from "../../../ReusableComponents/Input";

const Signup = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-[#fff] text-4xl m-6">
        Create Account
      </p>
      <form
        style={{
          background: "linear-gradient(180deg, #ACE7FF 0%, #53FFB8 100%)",
        }}
        className="flex flex-col flex-no-wrap justify-center items-center w-[360px] lg:w-[500px] rounded-[25px] m-4 pt-6 "
      >
        <div className="flex flex-row flex-no-wrap justify-between items-center">
          <Input
            className="bg-[#0D103C] w-[135px] lg:w-[180px] h-[75px] text-[#fff] px-4  m-4"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
          <Input
            className="bg-[#0D103C] w-[135px] lg:w-[180px] h-[75px] text-[#fff] px-4 m-4"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <Input
          className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
          id="email"
          type="text"
          placeholder="Email"
        />
        <Input
          className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4 m-4"
          id="phoneNumber"
          type="number"
          placeholder="Phone Number"
        />
        <Input
          className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4 m-4"
          id="password"
          type="password"
          placeholder="Password"
        />
        <div className="flex flex-row flex-no-wrap justify-between items-center">
          <button
            style={{ boxShadow: "8px 8px 4px #0D103C" }}
            className="bg-[#fff] w-[135px] h-[75px] font-roboto font-bold text-2xl text-[#0D103C] rounded-[20px]  px-4 mx-4 mt-4 mb-8"
          >
            Reset
          </button>
          <button
            style={{ boxShadow: "8px 8px 4px #0D103C" }}
            className="bg-[#fff] w-[135px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
          >
            Sign Up
          </button>
        </div>
        <button
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[305px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mb-8"
        >
          Sign Up With Google
        </button>
      </form>
    </div>
  );
}

export default Signup
