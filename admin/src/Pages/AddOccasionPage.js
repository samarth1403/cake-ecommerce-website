import React from "react";
import Input from "../Components/ReusableComponents/Input";
const AddOccasionPage = () => {
  return (
    <div className="bg-[#0D103C] flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-[#fff] text-4xl m-6">
        Add Occasion
      </p>
      <form
        style={{
          background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
        }}
        className="flex flex-col flex-no-wrap justify-center items-center w-[300px] md:w-[450px] lg:w-[700px] rounded-[25px] m-4 pt-6 "
      >
        <Input
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] px-4 m-4"
          id="occasionName"
          type="text"
          placeholder="Enter Occasion"
        />
        <button
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[250px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddOccasionPage;
