import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllProducts = async (data) => {
  const response = await axios.get(
    `${base_url}/product/all-products?${
      data?.subCategory ? `subCategory=${data?.subCategory}` : ""
    }`
  );
  return response.data;
};

const addToWishlist = async (data) => {
  const response = await axios.put(
    `${base_url}/product/add-to-wishlist`,
    {
      prodId:data?.prodId,
    },
    {
      headers: {
        Authorization: `Bearer ${
          data?.Token !== null
            ? data?.Token
            : ""
        }`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
}

const rateAProduct = async (data) => {
  const response = await axios.put(`${base_url}/product/rate-a-product`, data?.body, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const getProduct = async(id) => {
  const response = await axios.get(`${base_url}/product/get/${id}`);
  return response.data;
}

const getAllCategories = async(id) => {
  const response = await axios.get(
    `${base_url}/prodCategory/all-product-categories`
  );
  return response.data;
}
const productService = {
  getAllProducts,
  addToWishlist,
  getProduct,
  rateAProduct,
  getAllCategories,
};

export default productService;
