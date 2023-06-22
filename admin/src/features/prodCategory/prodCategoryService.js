import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllprodCategories = async() => {
    const response = await axios.get(
      `${base_url}/prodCategory/all-product-categories`
    );
    return response.data;
}

const prodCategoryService = {
  getAllprodCategories,
};

export default prodCategoryService;