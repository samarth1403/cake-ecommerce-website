import React from "react";
import InputWithBorder from "../../../ReusableComponents/InputWithBorder";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onShippingDetailsSubmit } from "../../../../features/order/orderSlice";
import { ScrollToTop } from "../../../ReusableComponents/ScrollToTop";

const ShippingDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let schema = Yup.object().shape({
    address: Yup.string().required("Address is Required"),
    landmark: Yup.string(),
    pincode: Yup.number().required("Pincode is Required"),
    city: Yup.string().required("City is Required"),
    state: Yup.string().required("State is Required"),
  });

  const formik = useFormik({
    initialValues: {
      address: "",
      landmark: "",
      pincode: "",
      city: "",
      state: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(onShippingDetailsSubmit(values))
      navigate("/cart-page/make-payment");
      ScrollToTop();
    },
  });
  return (
    <div className="bg-[#0D103C]">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <p className="text-[#fff] font-roboto font-bold text-4xl m-8">
          2. Shipping Details
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
            id="address"
            type="text"
            placeholder="Flat, Floor, Building Name / House Name, Area, Station, etc *"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange("address")}
            onBlur={formik.handleBlur("address")}
          />
          <div className="text-black font-bold text-lg">
            {formik.touched.address && formik.errors.address ? (
              <div>{formik.errors.address}</div>
            ) : null}
          </div>
          <InputWithBorder
            className="w-[300px] lg:w-[500px] h-[75px]"
            id="landmark"
            type="text"
            placeholder="Area Name, Landmark, etc (optional)"
            name="landmark"
            value={formik.values.landmark}
            onChange={formik.handleChange("landmark")}
            onBlur={formik.handleBlur("landmark")}
          />
          <div className="text-black font-bold text-lg">
            {formik.touched.landmark && formik.errors.landmark ? (
              <div>{formik.errors.landmark}</div>
            ) : null}
          </div>

          <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="felx flex-col justify-center items-center">
              <InputWithBorder
                className="w-[135px] lg:w-[145px] h-[75px]"
                id="pincode"
                type="number"
                placeholder="Pincode"
                name="pincode"
                value={formik.values.pincode}
                onChange={formik.handleChange("pincode")}
                onBlur={formik.handleBlur("pincode")}
              />
              <div className="text-black font-bold text-lg">
                {formik.touched.pincode && formik.errors.pincode ? (
                  <div>{formik.errors.pincode}</div>
                ) : null}
              </div>
            </div>
            <div className="felx flex-col justify-center items-center">
              <InputWithBorder
                className="w-[135px] lg:w-[145px] h-[75px]"
                id="city"
                type="text"
                placeholder="City"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange("city")}
                onBlur={formik.handleBlur("city")}
              />
              <div className="text-black font-bold text-lg">
                {formik.touched.city && formik.errors.city ? (
                  <div>{formik.errors.city}</div>
                ) : null}
              </div>
            </div>
            <div className="felx flex-col justify-center items-center">
              <InputWithBorder
                className="w-[300px] lg:w-[145px] h-[75px]"
                id="state"
                type="text"
                placeholder="State"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange("state")}
                onBlur={formik.handleBlur("state")}
              />
              <div className="text-black font-bold text-lg">
                {formik.touched.state && formik.errors.state ? (
                  <div>{formik.errors.state}</div>
                ) : null}
              </div>
            </div>
          </div>
          <button type="submit" className="bg-[#84FF58] w-[300px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-6 shadow-[6px_6px_2px_#0D103C]">
            Proceed to Pay
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-12" />
      </div>
    </div>
  );
};

export default ShippingDetails;
