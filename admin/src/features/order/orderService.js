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

const getOrderByOrderId = async (id) => {
  const response = await axios.get(
    `${base_url}/order/get-order-by-order-id/${id}`,
    config
  );
  return response.data;
};

const updateOrderStatus = async (body) => {
  const response = await axios.put(
    `${base_url}/order/update-order-status/${body.id}`,{status:body.status},
    config
  );
  return response.data;
};

const getMonthlyOrders = async () => {
  const response = await axios.get(`${base_url}/order/get-monthly-orders`,config);
  return response.data;
}

const getYearlyOrders = async () => {
  const response = await axios.get(
    `${base_url}/order/get-yearly-orders`,
    config
  );
  return response.data;
};

const orderService = {
  getAllOrders,
  getOrderByUserId,
  getMonthlyOrders,
  getYearlyOrders,
  getOrderByOrderId,
  updateOrderStatus
};

export default orderService;
