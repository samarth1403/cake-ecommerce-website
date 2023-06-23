import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllBlogs = async () => {
  const response = await axios.get(`${base_url}/blog/all-blogs`);
  return response.data;
};

const blogService = {
  getAllBlogs,
};

export default blogService;
