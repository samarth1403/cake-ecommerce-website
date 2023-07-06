import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllprodCategories = async () => {
  const response = await axios.get(
    `${base_url}/prodCategory/all-product-categories`
  );
  return response.data;
};

const createProdCategory = async (data) => {
  const response = await axios.post(`${base_url}/prodCategory/create`, data?.body, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const getProdCategory = async (id) => {
  const response = await axios.get(`${base_url}/prodCategory/get/${id}`);
  return response.data;
};

const updateProdCategory = async (data) => {
  const response = await axios.put(
    `${base_url}/prodCategory/update/${data.id}`,
    {
      categoryName: data.prodCategoryData.categoryName,
      subCategoryName: data.prodCategoryData.subCategoryName,
    },
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const deleteProdCategory = async (data) => {
  const response = await axios.delete(`${base_url}/prodCategory/delete/${data?.id}`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const prodCategoryService = {
  getAllprodCategories,
  createProdCategory,
  getProdCategory,
  updateProdCategory,
  deleteProdCategory,
};

export default prodCategoryService;
