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

const orderService = {
  getAllOrders,
};

export default orderService;
