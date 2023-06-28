import axios from 'axios';
import { config } from '../../utils/axiosConfig';
import {base_url} from '../../utils/base_url';

const uploadProductImg = async (data) => {
    const response = await axios.post(`${base_url}/upload/product/uploadImg`,data , config);
    return response.data;
}

const deleteProductImg = async(id) => {
    const response = await axios.delete(
      `${base_url}/upload/product/deleteImg/${id}`,
      config
    );
    console.log(response.data);
    return response.data;
}

const uploadBlogImg = async (data) => {
  const response = await axios.post(
    `${base_url}/upload/blog/uploadImg`,
    data,
    config
  );
  return response.data;
};

const deleteBlogImg = async (id) => {
  const response = await axios.delete(
    `${base_url}/upload/blog/deleteImg/${id}`,
    config
  );
  return response.data;
};

const uploadService = {
    uploadProductImg,
    uploadBlogImg,
    deleteBlogImg,
    deleteProductImg,
}

export default uploadService;