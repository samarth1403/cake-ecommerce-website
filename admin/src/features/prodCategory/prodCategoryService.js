import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllprodCategories = async() => {
    const response = await axios.get(
      `${base_url}/prodCategory/all-product-categories`
    );
    return response.data;
}

const createProdCategory = async(data) => {
  const response = await axios.post(`${base_url}/prodCategory/create`,data,config);
  return response.data;
}

const prodCategoryService = {
  getAllprodCategories,
  createProdCategory,
};

export default prodCategoryService;