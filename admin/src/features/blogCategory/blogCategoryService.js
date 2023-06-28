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

const getBlogCategory = async (id) => {
  const response = await axios.get(`${base_url}/blogCategory/get/${id}`);
  return response.data;
};

const updateBlogCategory = async (data) => {
  const response = await axios.put(
    `${base_url}/blogCategory/update/${data.id}`,
    {
      categoryName: data.blogCategoryData.categoryName,
    },
    config
  );
  return response.data;
};

const deleteBlogCategory = async (id) => {
  const response = await axios.delete(
    `${base_url}/blogCategory/delete/${id}`,
    config
  );
  return response.data;
};


const blogCategoryService = {
  getAllBlogCategories,
  createBlogCategory,
  getBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
};

export default blogCategoryService;
