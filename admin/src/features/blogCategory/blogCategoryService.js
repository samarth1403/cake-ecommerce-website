import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllBlogCategories = async () => {
  const response = await axios.get(
    `${base_url}/blogCategory/all-blog-categories`
  );
  return response.data;
};

const blogCategoryService = {
  getAllBlogCategories,
};

export default blogCategoryService;
