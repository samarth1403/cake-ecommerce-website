import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../../ReusableComponents/Input";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser, resetUserState } from "../../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../ReusableComponents/ScrollToTop";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userData, res } = useSelector((state) => state.user);

  useEffect(()=>{
    if (res?.success && userData) {
      navigate("/");
      ScrollToTop();
    }
  },[userData])

  let schema = Yup.object().shape({
    email: Yup.string()
      .email("Email Should be Valid")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      formik.resetForm();
    },
  });

  
  return (
    <div className="flex flex-row flex-wrap justify-center items-start">
      <div className="flex flex-col flex-no-wrap justify-center items-center mx-8">
        <p className="font-roboto font-bold text-[#fff] text-4xl m-6">Log In</p>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
          }}
          className="flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[360px] rounded-[25px] pt-6 "
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
          <Input
            className="bg-[#0D103C] min-[320px]:w-[250px] sm:w-[300px] h-[75px] text-[#fff] px-4 m-4"
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
              // style={{
              //   background:
              //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              // }}
              onClick={()=>formik.resetForm()}
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] w-[100px] h-[75px] font-roboto font-bold  text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
            >
              Reset
            </button>
            <button
              // style={{
              //   background:
              //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              // }}
              type="submit"
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] w-[100px] h-[75px] font-roboto font-bold  text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
            >
              Log In
            </button>
          </div>
          <Link to="/forgot-password" onClick={() => ScrollToTop()}>
            <p className="font-roboto font-medium text-[#0D10#C] text-xl mb-4">
              Forgot Password ?
            </p>
          </Link>
          {/* <button
            // style={{
            //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
            // }}
            style={{ boxShadow: "8px 8px 4px #0D103C" }}
            className="bg-[#fff] w-[305px] h-[75px] font-roboto font-bold text-[#0D103C] rounded-[20px] text-2xl px-4 mx-4 mb-8"
          >
            Sign In With Google
          </button> */}
        </form>
      </div>
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        <p className="text-[#fff] font-roboto font-bold text-3xl m-6">
          Create Account
        </p>
        <div
          style={{
            background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
          }}
          className="min-[320px]:w-[280px] sm:w-[360px] rounded-[25px] my-4 pt-6 flex flex-col flex-no-wrap justify-center items-center"
        >
          <p className="text-[#0D103C] font-roboto font-bold text-2xl m-4">
            Don't have an Account ?
          </p>
          <Link to="/sign-up-page" onClick={() => ScrollToTop()}>
            <button
              style={{
                background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              }}
              className="min-[320px]:w-[260px] sm:w-[305px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
            >
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
