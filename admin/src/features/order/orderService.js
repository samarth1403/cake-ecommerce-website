import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";


const getAllOrders = async (data) => {
  const response = await axios.get(`${base_url}/order/all-orders`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const getOrderByUserId = async (data) => {
  const response = await axios.get(
    `${base_url}/order/get-order-by-user-id/${data?.id}`,
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
}

const getOrderByOrderId = async (data) => {
  const response = await axios.get(
    `${base_url}/order/get-order-by-order-id/${data?.id}`,
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const updateOrderStatus = async (data) => {
  const response = await axios.put(
    `${base_url}/order/update-order-status/${data.id}`,
    { status: data.body.status },
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const getMonthlyOrders = async (data) => {
  const response = await axios.get(`${base_url}/order/get-monthly-orders`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
}

const getYearlyOrders = async (data) => {
  const response = await axios.get(`${base_url}/order/get-yearly-orders`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
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
