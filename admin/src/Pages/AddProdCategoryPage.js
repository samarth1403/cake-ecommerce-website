import React from "react";
import Input from "../Components/ReusableComponents/Input";
import * as Yup from 'yup';
import { useFormik } from "formik";
import {toast} from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { createProdCategory } from "../features/prodCategory/prodCategorySlice";
const AddProdCategoryPage = () => {

  const dispatch = useDispatch();
  const {prodCategory} = useSelector((state)=>{return state});

    let schema = Yup.object().shape({
      categoryName: Yup.string().required("Category is Required"),
      subCategoryName: Yup.string().required("Sub Category is Required"),
    });

    const formik = useFormik({
      initialValues: {
        categoryName: "",
        subCategoryName: "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        dispatch(createProdCategory(values));
        formik.resetForm();
        if(prodCategory.isSuccess && prodCategory.res.success){
          toast.success("Product Category Added Successfully");
        }
        if(prodCategory.isError){
          toast.error("Something went Wrong");
        }
      },
    });

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-center leading-normal text-4xl m-6">
        Add Category & SubCategory
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
          id="categoryName"
          type="text"
          placeholder="Enter Category"
          name="categoryName"
          value={formik.values.categoryName}
          onChange={formik.handleChange("categoryName")}
          onBlur={formik.handleBlur("categoryName")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.categoryName && formik.errors.categoryName ? (
            <div>{formik.errors.categoryName}</div>
          ) : null}
        </div>
        <Input
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] px-4 m-4"
          id="subCategoryName"
          type="text"
          placeholder="Enter Sub-Category"
          name="subCategoryName"
          value={formik.values.subCategoryName}
          onChange={formik.handleChange("subCategoryName")}
          onBlur={formik.handleBlur("subCategoryName")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.subCategoryName && formik.errors.subCategoryName ? (
            <div>{formik.errors.subCategoryName}</div>
          ) : null}
        </div>
        <button
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[250px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProdCategoryPage;
