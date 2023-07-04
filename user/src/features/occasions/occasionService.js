import axios from "axios";
import { base_url } from "../../utils/base_url";

const getAllOccasions = async () => {
  const response = await axios.get(`${base_url}/occasion/all-occasions`);
  return response.data;
};

const occasionService = {
  getAllOccasions,
};

export default occasionService;
