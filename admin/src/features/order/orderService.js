import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";


const getAllOrders = async () => {
  const response = await axios.get(`${base_url}/order/all-orders`,config);
  return response.data;
};

const getOrderByUserId = async (id) => {
  const response = await axios.get(
    `${base_url}/order/get-order-by-user-id/${id}`,config
  );
  return response.data;
}

const orderService = {
  getAllOrders,
  getOrderByUserId,
};

export default orderService;
