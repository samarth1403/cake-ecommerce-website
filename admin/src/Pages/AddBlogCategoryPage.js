import React,{useEffect} from "react";
import Input from "../Components/ReusableComponents/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createBlogCategory, resetBlogCategoryState } from "../features/blogCategory/blogCategorySlice";

const AddBlogCategoryPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const { isSuccess, isLoading, isError, createdCategory } = useSelector((state) => {
    return state.blogCategory;
  });

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Blog Category Added Successfully");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }, [isSuccess, isLoading, isError, createdCategory]);

  let schema = Yup.object().shape({
    categoryName: Yup.string().required("Category is Required"),
  });

  // console.log(state.prodCategory);

  const formik = useFormik({
    initialValues: {
      categoryName: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlogCategory(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetBlogCategoryState());
      }, 2000);
    },
  });
  

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-center leading-normal text-4xl m-6">
        Add Blog Category
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
        <button
          type="submit"
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[250px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlogCategoryPage;
