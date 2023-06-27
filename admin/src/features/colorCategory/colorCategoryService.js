import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllColorCategories = async () => {
  const response = await axios.get(
    `${base_url}/colorCategory/all-color-categories`
  );
  return response.data;
};

const createColorCategory = async (data) => {
  const response = await axios.post(
    `${base_url}/colorCategory/create`,
    data,
    config
  );
  console.log(response.data)
  return response.data;
};

const getColorCategory = async (id) => {
  const response = await axios.get(`${base_url}/colorCategory/get/${id}`);
  return response.data;
};

const updateColorCategory = async (data) => {
  const response = await axios.put(
    `${base_url}/colorCategory/update/${data.id}`,
    {
      colorName: data.colorCategoryData.colorName,
    },
    config
  );
  return response.data;
};

const deleteColorCategory = async (id) => {
  const response = await axios.delete(
    `${base_url}/colorCategory/delete/${id}`,
    config
  );
  return response.data;
};


const colorCategoryService = {
  getAllColorCategories,
  createColorCategory,
  getColorCategory,
  updateColorCategory,
  deleteColorCategory,
};

export default colorCategoryService;
