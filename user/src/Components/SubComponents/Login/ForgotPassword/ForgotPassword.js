import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../../ReusableComponents/Input";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { forgotPasswordToken } from "../../../../features/user/userSlice";

const ForgotPassword = () => {
   const dispatch = useDispatch();
 let schema = Yup.object().shape({
   email: Yup.string()
     .email("Email Should be Valid")
     .required("Email is Required"),
 });

 const formik = useFormik({
   enableReinitialize: true,
   initialValues: {
     email: "",
   },
   validationSchema: schema,
   onSubmit: (values) => {
     dispatch(forgotPasswordToken(values))
   },
 });

  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center ">
      <p className="font-roboto font-bold text-[#fff] text-3xl my-6 px-6 text-center">
        Reset Your Password
      </p>
      <p className="font-roboto font-bold text-[#fff] text-xl my-6 px-6 text-center">
        We will send you an email to reset your password .
      </p>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
        }}
        className="flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[360px] sm:w-[400px] rounded-[25px] pt-6 "
      >
        <Input
          className="bg-[#0D103C] min-[320px]:w-[250px] sm:w-[300px] h-[75px] text-[#fff] px-4  m-4"
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <button
          // style={{
          //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
          // }}
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] min-[320px]:w-[150px] sm:w-[200px] h-[75px] font-roboto font-bold text-[#0D103C] rounded-[20px] text-2xl px-4 mx-4 mb-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
