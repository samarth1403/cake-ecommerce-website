import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllBlogCategories = async () => {
  const response = await axios.get(
    `${base_url}/blogCategory/all-blog-categories`
  );
  return response.data;
};

const createBlogCategory = async (data) => {
  const response = await axios.post(
    `${base_url}/blogCategory/create`,
    data,
    config
  );
  console.log(response.data);
  return response.data;
};


const blogCategoryService = {
  getAllBlogCategories,
  createBlogCategory
};

export default blogCategoryService;
