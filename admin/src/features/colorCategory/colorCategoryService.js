import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllColorCategories = async () => {
  const response = await axios.get(
    `${base_url}/colorCategory/all-color-categories`
  );
  return response.data;
};

const createColorCategory = async (data) => {
  const response = await axios.post(
    `${base_url}/colorCategory/create`,
    data,
    config
  );
  return response.data;
};

const colorCategoryService = {
  getAllColorCategories,
  createColorCategory,
};

export default colorCategoryService;
