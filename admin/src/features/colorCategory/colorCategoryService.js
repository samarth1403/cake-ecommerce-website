import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllColorCategories = async () => {
  const response = await axios.get(
    `${base_url}/colorCategory/all-color-categories`
  );
  return response.data;
};

const colorCategoryService = {
  getAllColorCategories,
};

export default colorCategoryService;
