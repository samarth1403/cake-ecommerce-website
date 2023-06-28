import axios from 'axios';
import { base_url } from '../../utils/base_url';

  const getTokenFromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const config = {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage.Token}`,
      Accept: "application/json",
    },
  };

const createAProduct = async(body) => {
    const response = await axios.post(`${base_url}/product/create`,body,config);
    console.log(response.data);
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
    config
  );
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`${base_url}/product/delete/${id}`, config);
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