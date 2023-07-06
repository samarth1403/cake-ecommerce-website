import React, { useEffect, useState } from "react";
import Input from "../Components/ReusableComponents/Input";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import { createBlog, getBlog, resetBlogState, updateBlog } from "../features/blog/blogSlice";
import { getAllBlogCategories } from "../features/blogCategory/blogCategorySlice";
import { deleteBlogImg, resetUploadState, uploadBlogImg } from "../features/upload/uploadSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const AddBlogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogId = location.pathname.split('/')[3]
  const state = useSelector((state) => {
    return state;
  });
  const { isSuccess, isLoading, isError, gotBlog, updatedBlog } = useSelector(
    (state) => {
      return state.blog;
    }
  );
  const {Token} = useSelector((state)=>state.auth);

  useEffect(() => {
    if (blogId !== undefined) {
      dispatch(getBlog(blogId));
    } else {
      dispatch(resetBlogState());
    }
  }, [blogId]);

  useEffect(() => {
    dispatch(resetBlogState());
    dispatch(getAllBlogCategories());
  }, []);

  useEffect(() => {
    if (isSuccess && updatedBlog) {
      toast.success("Blog Updated Successfullly!");
      navigate("/admin/all-blogs");
    }
  }, [isSuccess, isLoading, isError, updatedBlog]);
  

  useEffect(() => {
    formik.values.images = state.upload?.images ? state.upload?.images : null;
  }, [state.upload?.images]);

  let schema = Yup.object().shape({
    title: Yup.string().required("Title is Required"),
    description: Yup.string().required("Description is Required"),
    category: Yup.string().required("Category is Required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: gotBlog?.title || "",
      description: gotBlog?.description || "",
      category: gotBlog?.category || "",
      images: state?.upload?.images || [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (blogId !== undefined && state.upload.images !== []) {
        const data = { id: blogId, blogData: values, Token : Token };
        dispatch(updateBlog(data));
        dispatch(resetUploadState());
        dispatch(resetBlogState());
      } else {
        dispatch(createBlog({body:values, Token:Token}));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetUploadState());
          dispatch(resetBlogState());
        }, 200);
      }
    },
  });

     

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-4xl m-6">
        {blogId !== undefined ? "Update" : "Add"} Blog
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
          id="blogTitle"
          type="text"
          placeholder="Enter Blog Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>
        <textarea
          className="font-roboto font-[400] text-xl rounded-[15px] text-[#fff] w-[250px] md:w-[400px] lg:w-[600px] h-[300px] bg-[#0D103C]
          text-start p-4 m-4"
          id="description"
          type="text"
          placeholder="Description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange("description")}
          onBlur={formik.handleBlur("description")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <select
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] font-roboto font-[400] text-xl rounded-[15px] px-4 pr-8 m-4"
          id="categoryName"
          type="text"
          name="categoryName"
          value={formik.values.category}
          onChange={formik.handleChange("category")}
          onBlur={formik.handleBlur("category")}
        >
          <option value="">Select Category</option>
          {state.blogCategory.blogCategories?.map((i, j) => {
            return (
              <option value={i.categoryName} key={j}>
                {i?.categoryName}
              </option>
            );
          })}
        </select>
        <div className="text-black font-bold text-lg">
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}
        </div>
        <div className="flex justify-start items-center bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] font-roboto font-[400] text-xl rounded-[15px] px-4 pr-8 m-4">
          <Dropzone
            onDrop={(acceptedFiles) =>
              dispatch(uploadBlogImg({ body: acceptedFiles, Token: Token }))
            }
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="cursor-pointer">Upload Image of Blog</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="flex flex-col flex-no-wrap justify-center items-center">
          <p className="font-bold text-2xl text-[#0D103C] m-2">
            Uploaded Images
          </p>
          {state.upload?.images && (
            <div className="flex flex-row flex-wrap justify-center items-center">
              {state.upload.images?.map((i, j) => {
                return (
                  <div className="relative" key={j}>
                    <button
                      onClick={() =>
                        dispatch(
                          deleteBlogImg({ id: i?.public_id, Token: Token })
                        )
                      }
                      className="btn-close absolute top-0 right-0"
                    >
                      <AiFillCloseCircle className="text-3xl" />
                    </button>
                    <img
                      src={i.url}
                      alt=""
                      className="w-[200px] h-[200px] rounded-[15px] m-2"
                    />
                  </div>
                );
              })}
            </div>
          )}
          {gotBlog?.images && (
            <div className="flex flex-row flex-wrap justify-center items-center">
              {gotBlog?.images?.map((i, j) => {
                return (
                  <div className="relative" key={j}>
                    <button
                      onClick={() =>
                        dispatch(
                          deleteBlogImg({ id: i?.public_id, Token: Token })
                        )
                      }
                      className="btn-close absolute top-0 right-0"
                    >
                      <AiFillCloseCircle className="text-3xl" />
                    </button>
                    <img
                      src={i.url}
                      alt=""
                      className="w-[200px] h-[200px] rounded-[15px] m-2"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <button
          type="submit"
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] w-[250px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
        >
          {blogId !== undefined ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;
