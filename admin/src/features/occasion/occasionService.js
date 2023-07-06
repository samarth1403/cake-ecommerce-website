import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllOccasions = async () => {
  const response = await axios.get(`${base_url}/occasion/all-occasions`);
  return response.data;
};

const createOccasion = async (data) => {
  const response = await axios.post(`${base_url}/occasion/create`, data?.body, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const getOccasion = async (id) => {
  const response = await axios.get(`${base_url}/occasion/get/${id}`);
  return response.data;
};

const updateOccasion = async (data) => {
  const response = await axios.put(
    `${base_url}/occasion/update/${data?.id}`,
    { occasionName: data.occasionData.occasionName },
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const deleteOccasion = async (data) => {
  const response = await axios.delete(`${base_url}/occasion/delete/${data?.id}`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const occasionService = {
  getAllOccasions,
  createOccasion,
  getOccasion,
  updateOccasion,
  deleteOccasion
};

export default occasionService;
