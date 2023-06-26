import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllOccasions = async () => {
  const response = await axios.get(`${base_url}/occasion/all-occasions`);
  return response.data;
};

const createOccasion = async (data) => {
  const response = await axios.post(
    `${base_url}/occasion/create`,
    data,
    config
  );
  return response.data;
};


const occasionService = {
  getAllOccasions,
  createOccasion,
};

export default occasionService;
