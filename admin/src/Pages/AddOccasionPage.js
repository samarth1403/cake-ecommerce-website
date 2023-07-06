import React, { useEffect } from "react";
import Input from "../Components/ReusableComponents/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  createOccasion,
  getOccasion,
  resetOccasionState,
  updateOccasion,
} from "../features/occasion/occasionSlice";
import { useLocation , useNavigate} from "react-router-dom";

const AddOccasionPage = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const occasionId = location.pathname.split("/")[3];
  const {
    isSuccess,
    isError,
    isLoading,
    createdOccasion,
    gotOccasion,
    updatedOccasion,
  } = useSelector((state) => {
    return state.occasion;
  });
  const {Token} = useSelector((state)=>state.auth);

  useEffect(() => {
    if (occasionId !== undefined) {
      dispatch(getOccasion(occasionId));
    } else {
      dispatch(resetOccasionState());
    }
  }, [occasionId]);

  useEffect(() => {
    if (isSuccess && createdOccasion) {
      toast.success("Occasion Added Successfully");
    }
    if (isSuccess && updatedOccasion) {
      toast.success("Occasion Updated Successfully");
      navigate("/admin/all-occasions")
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }, [isSuccess, isLoading, isError, createdOccasion, updatedOccasion]);

  let schema = Yup.object().shape({
    occasionName: Yup.string().required("Occasion Name is Required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      occasionName: gotOccasion?.occasionName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (occasionId !== undefined) {
        const data = { id: occasionId, occasionData: values , Token : Token};
        dispatch(updateOccasion(data));
        dispatch(resetOccasionState());
      } else {
        dispatch(createOccasion({body:values , Token : Token}));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetOccasionState());
        }, 200);
      }
    },
  });

  return (
    <div className=" flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-4xl m-6">
        {occasionId !== undefined ? "Edit" : "Add"} Occasion
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
          id="occasionName"
          type="text"
          placeholder="Enter Occasion"
          name="occasionName"
          value={formik.values.occasionName}
          onChange={formik.handleChange("occasionName")}
          onBlur={formik.handleBlur("occasionName")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.occasionName && formik.errors.occasionName ? (
            <div>{formik.errors.occasionName}</div>
          ) : null}
        </div>
        <button
          type="submit"
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[250px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
        >
          {occasionId !== undefined ? "Edit" : "Add"} Occasion
        </button>
      </form>
    </div>
  );
};

export default AddOccasionPage;
