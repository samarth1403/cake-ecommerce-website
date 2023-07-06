import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllBlogs = async () => {
  const response = await axios.get(`${base_url}/blog/all-blogs`);
  return response.data;
};

const createBlog = async (data) => {
  const response = await axios.post(`${base_url}/blog/create`, data?.body, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
}

const getBlog = async (id) => {
  const response = await axios.get(`${base_url}/blog/get/${id}`);
  return response.data;
};

const updateBlog = async (data) => {
  const response = await axios.put(
    `${base_url}/blog/update/${data.id}`,
    {
      title: data.blogData.title,
      description: data.blogData.description,
      category: data.blogData.category,
      images: data.blogData.images,
    },
   {headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    }},
  );
  return response.data;
};

const deleteBlog = async (data) => {
  const response = await axios.delete(
    `${base_url}/blog/delete/${data?.id}`,
   { headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    }}
  );
  return response.data;
};

const blogService = {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog
};

export default blogService;
