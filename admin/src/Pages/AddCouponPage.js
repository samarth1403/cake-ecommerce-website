import React, { useEffect } from "react";
import Input from "../Components/ReusableComponents/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createCoupon, getCoupon, resetCouponState, updateCoupon } from "../features/coupon/couponSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { updateOccasion } from "../features/occasion/occasionSlice";

const AddCouponPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const couponId = location.pathname.split("/")[3];
  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    updatedCoupon,
    gotCoupon,
  } = useSelector((state) => {
    return state.coupon;
  });

  const {Token} = useSelector((state)=>state.auth)

    const correctDateFormat = (inputDate) => {
const [year, month, day] = inputDate.split("-");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;
    }

    const changeDateFormat = (date) => {
      const newDate = new Date(date)?.toLocaleDateString();
      const [month, day, year] = newDate.split("/");
      const inputDate =  [year, month, day].join("-");
      return correctDateFormat(inputDate);
    };

  useEffect(() => {
    if (couponId !== undefined) {
      dispatch(getCoupon({ id: couponId , Token : Token}));
    } else {
      dispatch(resetCouponState());
    }
  }, [couponId]);

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfully");
    }
    if (isSuccess && updatedCoupon) {
      toast.success("Coupon Updated Successfully");
      navigate("/admin/all-coupons");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }, [isSuccess, isError, isLoading, createdCoupon, updatedCoupon]);

  let schema = Yup.object().shape({
    name: Yup.string().required("Coupon name is Required"),
    discount: Yup.number().required("Discount in Percentage is Required"),
    expiry: Yup.date().required("Expiry date is Required"),
  });


  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      name: gotCoupon?.name || "",
      discount: gotCoupon?.discount || "",
      expiry: changeDateFormat(gotCoupon?.expiry) || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if(couponId !== undefined){
        const data = {id:couponId, couponData: values, Token : Token}
        dispatch(updateCoupon(data));
        dispatch(resetCouponState());
      }
      else{
        dispatch(createCoupon({body:values,Token:Token}));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetCouponState());
        }, 2000);
      };
    },
  });

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-center leading-normal text-4xl m-6">
        {couponId !== undefined ? "Edit" : "Add"} Coupon
      </p>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
        }}
        className="flex flex-col flex-no-wrap justify-center items-center w-[300px] md:w-[450px] lg:w-[700px] rounded-[25px] m-4 pt-6 "
      >
        <Input
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] px-4 m-4"
          id="name"
          type="text"
          placeholder="Enter Coupon Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <Input
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] px-4 m-4"
          id="discount"
          type="number"
          placeholder="Enter Discount in Percentage"
          name="discount"
          value={formik.values.discount}
          onChange={formik.handleChange("discount")}
          onBlur={formik.handleBlur("discount")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.discount && formik.errors.discount ? (
            <div>{formik.errors.discount}</div>
          ) : null}
        </div>
        <Input
          className="form-control bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] px-4 m-4"
          id="expiry"
          type="date"
          placeholder="Enter Expiry Date"
          name="expiry"
          value={formik.values.expiry}
          onChange={formik.handleChange("expiry")}
          onBlur={formik.handleBlur("expiry")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.expiry && formik.errors.expiry ? (
            <div>{formik.errors.expiry}</div>
          ) : null}
        </div>
        <button
          type="submit"
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[250px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
        >
          {couponId !== undefined ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddCouponPage;
