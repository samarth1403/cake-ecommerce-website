import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../../ReusableComponents/Input";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { resetPassword } from "../../../../features/user/userSlice";
import { ScrollToTop } from "../../../ReusableComponents/ScrollToTop";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getToken = location.pathname.split("/")[2];
  console.log(getToken);

  const {res , foundUser} = useSelector((state)=>state.user)

  const dispatch = useDispatch();
  let schema = Yup.object().shape({
    password: Yup.string()
      .required("Password is Required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(resetPassword({token:getToken, password:values.password}));
      if(res.success && foundUser){
        navigate("/login-page");
        ScrollToTop();
      }
    },
  });
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <p className="font-roboto font-bold text-[#fff] text-4xl my-6 text-center">
        Set New Password
      </p>
      <form
        onClick={formik.handleSubmit}
        style={{
          background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
        }}
        className="flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[250px] sm:w-[360px] sm:w-[400px] rounded-[25px] m-4 pt-6 "
      >
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
        {/* <Input
          className="bg-[#0D103C] w-[300px] sm:w-[360px] h-[75px] text-[#fff] px-4 m-4"
          id="confirm-password"
          type="password"
          placeholder="Confirm Password"
        /> */}
        <button
          type="submit"
          // style={{
          //   background: "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
          // }}
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] min-[320px]:w-[150px] sm:w-[200px] h-[75px] font-roboto font-bold text-[#0D103C] rounded-[20px] text-2xl px-4 mx-4 mt-4 mb-8"
        >
          Ok
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
