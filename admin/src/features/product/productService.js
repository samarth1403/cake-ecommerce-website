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

const productService = {
    getAllProducts,
    createAProduct,
}

export default productService;