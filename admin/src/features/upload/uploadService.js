import axios from 'axios';
import { config } from '../../utils/axiosConfig';
import {base_url} from '../../utils/base_url';

const uploadProductImg = async (data) => {
    const response = await axios.post(
      `${base_url}/upload/product/uploadImg`,
      data?.body,
      {
        headers: {
          Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
          Accept: "application/json",
        },
      }
    );
    return response.data;
}

const deleteProductImg = async(data) => {
    const response = await axios.delete(
      `${base_url}/upload/product/deleteImg/${data?.id}`,
      {
        headers: {
          Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
          Accept: "application/json",
        },
      }
    );
    return response.data;
}

const uploadBlogImg = async (data) => {
  const response = await axios.post(
    `${base_url}/upload/blog/uploadImg`,
    data?.body,
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const deleteBlogImg = async (data) => {
  const response = await axios.delete(
    `${base_url}/upload/blog/deleteImg/${data?.id}`,
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
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