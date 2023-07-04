import React,{useEffect} from 'react'
import Input from "../../../ReusableComponents/Input";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { registerUser, resetUserState } from '../../../../features/user/userSlice';
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

   const { user, registeredUser, res } = useSelector((state) => state.user);

   useEffect(() => {
     if (res?.success && registeredUser) {
       navigate("/sign-in-page");
     }
   }, [registeredUser]);

    let schema = Yup.object().shape({
      firstName: Yup.string().required("First Name is Required"),
      lastName: Yup.string().required("Last Name is Required"),
      email: Yup.string().email("Email Should be Valid").required("Email is Required"),
      mobile: Yup.number().required("Mobile Number is Required"),
      password: Yup.string().required("Password is Required")
    });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      formik.resetForm();
    },
  });
    
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-[#fff] text-4xl m-6">
        Create Account
      </p>
      
      <form
        onSubmit={formik.handleSubmit}
        style={{
          background: "linear-gradient(180deg, #ACE7FF 0%, #53FFB8 100%)",
        }}
        className="flex flex-col flex-no-wrap justify-center items-center w-[360px] lg:w-[500px] rounded-[25px] m-4 pt-6 "
      >
        <Input
          className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
          id="firstName"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange("firstName")}
          onBlur={formik.handleBlur("firstName")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <Input
          className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
          id="lastName"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange("lastName")}
          onBlur={formik.handleBlur("lastName")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>

        <Input
          className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
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
        <Input
          className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4 m-4"
          id="mobile"
          type="number"
          placeholder="Phone Number"
          name="mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange("mobile")}
          onBlur={formik.handleBlur("mobile")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.mobile && formik.errors.mobile ? (
            <div>{formik.errors.mobile}</div>
          ) : null}
        </div>
        <Input
          className="bg-[#0D103C] w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4 m-4"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="flex flex-row flex-no-wrap justify-between items-center">
          <button
            onClick={() => formik.resetForm()}
            style={{ boxShadow: "8px 8px 4px #0D103C" }}
            className="bg-[#fff] w-[135px] h-[75px] font-roboto font-bold text-2xl text-[#0D103C] rounded-[20px]  px-4 mx-4 mt-4 mb-8"
          >
            Reset
          </button>
          <button
            type="submit"
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
