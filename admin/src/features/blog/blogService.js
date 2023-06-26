import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllBlogs = async () => {
  const response = await axios.get(`${base_url}/blog/all-blogs`);
  return response.data;
};

const createBlog = async (data) => {
  const response = await axios.post(`${base_url}/blog/create`,data,config);
  return response.data;
}

const blogService = {
  getAllBlogs,
  createBlog,
};

export default blogService;
