import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/ReusableComponents/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();

  
  const { user, isLoading, isSuccess, isError, res } = useSelector(
    (state) => {
      return state.auth;
    }
  );

  let schema = Yup.object().shape({
    email: Yup.string()
      .email("Email should be Valid")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
    dispatch(loginAdmin(values));
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (res.success && isSuccess) {
      navigate("admin");
    }
    else {
      navigate("");
    }
  }, [user, isLoading, isSuccess, isError]);

  //The follwing is my code
  //  useEffect(() => {
  //    if (formik.values.email === user.email && isSuccess) {
  //      navigate("admin");
  //    }
  //  }, [user, isLoading, isSuccess, isError]);
 

  return (
    <div className="bg-[#0D103C] h-[100vh] w-[100vw] flex flex-row flex-wrap justify-center items-start">
      <div className="flex flex-col flex-no-wrap justify-center items-center mx-8">
        <p className="font-roboto font-bold text-[#fff] text-4xl m-6">Log In</p>
        <p className="font-roboto font-bold text-[#fff] text-2xl m-2">
          Log In to your Account to Continue
        </p>
        <div className="text-red-500 text-lg">{res.success === false ? "You are not an Admin" : ""}</div>
        <form
          style={{
            background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
          }}
          className="flex flex-col flex-no-wrap justify-center items-center w-[360px] rounded-[25px] m-4 pt-6 "
          onSubmit={formik.handleSubmit}
        >
          <Input
            className="bg-[#0D103C] w-[300px] h-[75px] text-[#fff] px-4  m-4"
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleChange("email")}
          />
          <div className="text-black">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <Input
            className="bg-[#0D103C] w-[300px] h-[75px] text-[#fff] px-4 m-4"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleChange("password")}
          />
          <div className="text-black">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex flex-row flex-no-wrap justify-between items-center">
            {/* <button
              // style={{
              //   background:
              //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              // }}
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] w-[135px] h-[75px] font-roboto font-bold  text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
            >
              Reset
            </button> */}
            <button
              // style={{
              //   background:
              //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              // }}
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] w-[300px] h-[75px] font-roboto font-bold  text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
            >
              Log In
            </button>
          </div>
          <Link to="/forgot-password">
            <p className="font-roboto font-medium text-[#0D10#C] text-xl mb-4">
              Forgot Password ?
            </p>
          </Link>
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
};

export default LoginPage;
