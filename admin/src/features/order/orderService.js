import axios from "axios";
import { base_url } from "../../utils/base_url";

const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const config = {
    headers : {
        Authorization : `Bearer ${getTokenFromLocalStorage.Token}`,
        Accept : "application/json",
    }
}

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
