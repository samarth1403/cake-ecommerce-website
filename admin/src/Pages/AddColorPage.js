import React, { useEffect } from "react";
import Input from "../Components/ReusableComponents/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate , useLocation } from "react-router-dom";
import {
  createColorCategory,
  getColorCategory,
  resetColorCategoryState,
  updateColorCategory,
} from "../features/colorCategory/colorCategorySlice";

const AddColorPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const colorCategoryId = location.pathname.split("/")[3];

  const state = useSelector((state) => {
    return state;
  });

  const { isSuccess, isError, isLoading, createdColor, gotColorCategory , updatedColorCategory } = useSelector(
    (state) => {
      return state.colorCategory;
    }
  );

  useEffect(() => {
    if (colorCategoryId !== undefined) {
      dispatch(getColorCategory(colorCategoryId));
    } else {
      dispatch(resetColorCategoryState());
    }
  }, [colorCategoryId]);
  
  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfully");
    }
    if (isSuccess && updatedColorCategory) {
      toast.success("Color Category Updated Successfully");
      navigate("/admin/all-colors");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }, [isSuccess, isLoading, isError, createdColor, updatedColorCategory]);

  let schema = Yup.object().shape({
    colorName: Yup.string().required("Color Name is Required").lowercase(),
  });
  console.log(gotColorCategory)
  const formik = useFormik({

    initialValues: {
      colorName: gotColorCategory?.colorName || "",
    },
    validationSchema: schema,
    enableReinitialize:true,
    onSubmit: (values) => {
      if(colorCategoryId !== undefined){
        const data = { id: colorCategoryId, colorCategoryData: values };
        dispatch(updateColorCategory(data));
        dispatch(resetColorCategoryState());
      }
      else {
        dispatch(createColorCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetColorCategoryState());
        }, 200);
      }
    },
  });

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-4xl m-6">
        {colorCategoryId !== undefined ? "Update" : "Add"} Color
      </p>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          background: "linear-gradient(90deg, #FF416C 0%, #FFAEFC 100%)",
        }}
        className="flex flex-col flex-no-wrap justify-center items-center w-[300px] md:w-[450px] lg:w-[700px] rounded-[25px] m-4 pt-6"
      >
        <p className="font-roboto font-bold text-3xl m-6">
          Enter color name in small case
        </p>
        <Input
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] px-4 m-4"
          id="colorName"
          type="text"
          placeholder="Enter Color"
          name="colorName"
          value={formik.values.colorName}
          onChange={formik.handleChange("colorName")}
          onBlur={formik.handleBlur("colorName")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.colorName && formik.errors.colorName ? (
            <div>{formik.errors.colorName}</div>
          ) : null}
        </div>
        <button
          type="submit"
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[250px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
        >
          {colorCategoryId !== undefined ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddColorPage;
