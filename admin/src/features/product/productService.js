import axios from 'axios';
import { base_url } from '../../utils/base_url';
import {config} from '../../utils/axiosConfig.js'
  

const createAProduct = async(data) => {
    const response = await axios.post(`${base_url}/product/create`, data?.body, {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    });
    return response.data;
}

const getAllProducts = async() => {
    const response = await axios.get(`${base_url}/product/all-products`)
    return response.data;
}

const getProduct = async (id) => {
  const response = await axios.get(`${base_url}/product/get/${id}`);
  return response.data;
};

const updateProduct = async (data) => {
  const response = await axios.put(
    `${base_url}/product/update/${data.id}`,
    {
      title: data.productData.title,
      price: data.productData.price,
      category: data.productData.category,
      subCategory: data.productData.subCategory,
      color: data.productData.color,
      tags: data.productData.tags,
      images: data.productData.images,
    },
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const deleteProduct = async (data) => {
  const response = await axios.delete(`${base_url}/product/delete/${data?.id}`,  {headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      }},);
  return response.data;
};


const productService = {
    getAllProducts,
    createAProduct,
    getProduct,
    updateProduct,
    deleteProduct
}

export default productService;