import React from 'react'
import InputWithBorder from '../../../ReusableComponents/InputWithBorder'
import {Link} from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { onContactDetailsSubmit } from '../../../../features/order/orderSlice';
import { ScrollToTop } from '../../../ReusableComponents/ScrollToTop';

const ContactDetails = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate();
  let schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .email("Email Should be Valid")
      .required("Email is Required"),
    mobile: Yup.number().required("Mobile Number is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(onContactDetailsSubmit(values))
      navigate("/cart-page/shipping-details")
      ScrollToTop();
    },
  });
  return (
    <div className="bg-[#0D103C]">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <p className="text-[#fff] font-roboto font-bold text-4xl m-8">
          1. Contact Details
        </p>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.76) 0.01%, #C898F8 0.02%, #8A16FD 100%)",
          }}
          className="w-[360px] lg:w-[600px] rounded-[25px] m-4 pt-6 flex flex-col flex-no-wrap justify-center items-center"
        >
          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
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

          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
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
          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
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
          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
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
          <button
            type="submit"
            className="bg-[#84FF58] w-[300px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-6 shadow-[6px_6px_2px_#0D103C]"
          >
            Continue
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
    </div>
  );
}

export default ContactDetails
