import React,{useEffect} from "react";
import Input from "../Components/ReusableComponents/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createBlogCategory, getBlogCategory, resetBlogCategoryState, updateBlogCategory } from "../features/blogCategory/blogCategorySlice";
import { useLocation, useNavigate } from "react-router-dom";

const AddBlogCategoryPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const blogCategoryId = location.pathname.split("/")[3];

  const {
    isSuccess,
    isLoading,
    isError,
    createdCategory,
    updatedBlogCategory,
    gotBlogCategory,
  } = useSelector((state) => {
    return state.blogCategory;
  });
  const {Token} = useSelector((state)=>state.auth);

  useEffect(() => {
    if (blogCategoryId !== undefined) {
      dispatch(getBlogCategory(blogCategoryId));
    } else {
      dispatch(resetBlogCategoryState());
    }
  }, [blogCategoryId]);


  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Blog Category Added Successfully");
    }
    if (isSuccess && updatedBlogCategory) {
      toast.success("Blog Category Updated Successfully");
      navigate("/admin/all-blog-categories");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }, [isSuccess, isLoading, isError, createdCategory, updatedBlogCategory]);

  let schema = Yup.object().shape({
    categoryName: Yup.string().required("Category is Required"),
  });


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      categoryName: gotBlogCategory?.categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (blogCategoryId !== undefined) {
        const data = { id: blogCategoryId, blogCategoryData: values , Token : Token};
        dispatch(updateBlogCategory(data));
        dispatch(resetBlogCategoryState());
      }
      else {
        dispatch(createBlogCategory({ body: values , Token : Token}));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetBlogCategoryState());
        }, 200);
      }
    },
  });
  

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-center leading-normal text-4xl m-6">
        {blogCategoryId !== undefined ? "Update" : "Add"} Blog Category
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
          {blogCategoryId !== undefined ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddBlogCategoryPage;
