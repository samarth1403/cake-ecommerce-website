import React, { useEffect, useState } from "react";
import Input from "../Components/ReusableComponents/Input";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import Dropzone from "react-dropzone";
import {
  createAProduct,
  getProduct,
  resetProductState,
  updateProduct,
} from "../features/product/productSlice";
import { getAllColorCategories } from "../features/colorCategory/colorCategorySlice";
import { getAllprodCategories } from "../features/prodCategory/prodCategorySlice";
import { deleteProductImg, resetUploadState, uploadProductImg } from "../features/upload/uploadSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productId = location.pathname.split("/")[3];
  const [colorArray, setColorArray] = useState([]);
  const state = useSelector((state) => {return state});
  const { isSuccess, isLoading, isError, createdProduct, gotProduct , updatedProduct } = useSelector((state) => {
    return state.product;
  });

  useEffect(() => {
    if (productId !== undefined) {
      dispatch(getProduct(productId));
    } else {
      dispatch(resetProductState());
    }
  }, [productId]);

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product added Successfully");
    }
    if (isSuccess && updatedProduct) {
      toast.success("Product Updated Successfullly!");
      navigate("/admin/all-products");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }, [isSuccess, isLoading, isError, createdProduct, updatedProduct]);

    useEffect(() => {
      formik.values.color = colorArray ? colorArray : null;
      formik.values.images = state.upload?.images ? state.upload?.images : null;
    }, [colorArray, state.upload?.images]);


  let schema = Yup.object().shape({
    title: Yup.string().required("Title is Required"),
    price: Yup.number().required("Price is Required"),
    category: Yup.string().required("Category is Required"),
    subCategory: Yup.string().required("Sub Category is Required"),
    color: Yup.array()
      .min(1, "Pick at least one color")
      .required("Color is Required"),
    tags: Yup.string().required("Tag is Also required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: gotProduct?.title || "",
      price: gotProduct?.price || "",
      category: gotProduct?.category || "",
      subCategory: gotProduct?.subCategory || "",
      color: gotProduct?.color || "",
      images: state?.upload?.images || [],
      tags: gotProduct?.tags || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (productId !== undefined && state.upload.images !== []) {
        const data = { id: productId, productData: values };
        dispatch(updateProduct(data));
        dispatch(resetUploadState());
        dispatch(resetProductState());
      } else {
        dispatch(createAProduct(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetUploadState());
          dispatch(resetProductState());
        }, 200);
      }
    },
  });

  useEffect(() => {
    dispatch(getAllColorCategories());
    dispatch(getAllprodCategories());
  }, []);


  const colorOptions = [];
  state.colorCategory.colorCategories?.forEach((element) => {
    colorOptions.push({
      label: element.colorName,
      value: element._id,
    });
  });

  const handleColorOptions = (e) => {
    setColorArray(e);
  };

  return (
    <div className=" flex flex-col flex-wrap justify-center items-center">
      <p className="font-roboto font-bold text-4xl m-6">
        {productId !== undefined ? "Update" : "Add"} Product
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
          id="productTitle"
          type="text"
          placeholder="Enter Product Title"
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
        <Input
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] px-4 m-4"
          id="productPrice"
          type="number"
          placeholder="Enter Product Price"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange("price")}
          onBlur={formik.handleBlur("price")}
        />
        <div className="text-black font-bold text-lg">
          {formik.touched.price && formik.errors.price ? (
            <div>{formik.errors.price}</div>
          ) : null}
        </div>
        <select
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] font-roboto font-[400] text-xl rounded-[15px] px-4 pr-8 m-4"
          id="categoryName"
          type="text"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange("category")}
          onBlur={formik.handleBlur("category")}
        >
          <option value="">Select Category</option>
          {state.prodCategory.prodCategories.map((i, j) => {
            return (
              <option value={i.categoryName} key={j}>
                {i.categoryName}
              </option>
            );
          })}
        </select>
        <div className="text-black font-bold text-lg">
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}
        </div>
        <select
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] font-roboto font-[400] text-xl rounded-[15px] px-4 pr-8 m-4"
          id="subCategoryName"
          type="text"
          name="subCategory"
          value={formik.values.subCategory}
          onChange={formik.handleChange("subCategory")}
          onBlur={formik.handleBlur("subCategory")}
        >
          <option value="">Select Sub Category</option>
          {state.prodCategory.prodCategories.map((i, j) => {
            return (
              <option value={i.subCategoryName} key={j}>
                {i.subCategoryName}
              </option>
            );
          })}
        </select>
        <div className="text-black font-bold text-lg">
          {formik.touched.subCategory && formik.errors.subCategory ? (
            <div>{formik.errors.subCategory}</div>
          ) : null}
        </div>
        <div className="relative bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] font-roboto font-[400] text-xl rounded-[15px] px-4 pr-8 m-4">
          <Select
            mode="multiple"
            allowClear
            className="absolute inset-0"
            placeholder="Select Colors"
            defaultValue={colorArray}
            onChange={(i) => handleColorOptions(i)}
            options={colorOptions}
          />
        </div>
        ;
        {/* <select
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] font-roboto font-[400] text-xl rounded-[15px] px-4 pr-8 m-4"
          id="colorName"
          type="text"
          name="color"
          value={formik.values.color}
          onChange={formik.handleChange("color")}
          onBlur={formik.handleBlur("color")}
        >
          <option defaultValue>Select Color</option>
          {state.colorCategory.colorCategories.map((i, j) => {
            return (
              <option value={i.colorName} key={j}>
                {i.colorName}
              </option>
            );
          })}
        </select> */}
        <div className="text-black font-bold text-lg">
          {formik.touched.color && formik.errors.color ? (
            <div>{formik.errors.color}</div>
          ) : null}
        </div>
        <select
          className="bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] font-roboto font-[400] text-xl rounded-[15px] px-4 pr-8 m-4"
          id="tags"
          type="text"
          name="tags"
          value={formik.values.tags}
          onChange={formik.handleChange("tags")}
          onBlur={formik.handleBlur("tags")}
        >
          <option value="">Select Tags</option>
          <option value="featured">Featured</option>
          <option value="popular">Popular</option>
          <option value="special">Special</option>
        </select>
        <div className="text-black font-bold text-lg">
          {formik.touched.tags && formik.errors.tags ? (
            <div>{formik.errors.tags}</div>
          ) : null}
        </div>
        <div className="flex justify-start items-center bg-[#0D103C] w-[250px] md:w-[400px] lg:w-[600px] h-[75px] text-[#fff] font-roboto font-[400] text-xl rounded-[15px] px-4 pr-8 m-4">
          <Dropzone
            onDrop={(acceptedFiles) =>
              dispatch(uploadProductImg(acceptedFiles))
            }
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="cursor-pointer">Upload Images of Product</p>
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
                      onClick={() => dispatch(deleteProductImg(i.public_id))}
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
          {gotProduct?.images && (
            <div className="flex flex-row flex-wrap justify-center items-center">
              {gotProduct?.images?.map((i, j) => {
                return (
                  <div className="relative" key={j}>
                    <button
                      onClick={() => dispatch(deleteProductImg(i.public_id))}
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
          {productId !== undefined ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
