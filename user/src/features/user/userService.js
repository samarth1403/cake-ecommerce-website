import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const registerUser = async (data) => {
  const response = await axios.post(`${base_url}/user/register-user`, data);
  return response.data;
};

const loginUser = async (data) => {
  const response = await axios.post(`${base_url}/user/login-user`, data);
  return response.data;
};

const getWishlistOfUser = async (data) => {
  const response = await axios.get(`${base_url}/user/wishlist/get`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const addToCart = async (data) => {
  const response = await axios.post(
    `${base_url}/user/cart/create`,
    data?.body,
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const getCart = async (data) => {
  const response = await axios.get(`${base_url}/user/cart/get`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const emptyCart = async (data) => {
  const response = await axios.delete(`${base_url}/user/cart/empty`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const deleteProductFromCart = async (data) => {
  const response = await axios.delete(
    `${base_url}/user/cart/delete-product/${data?.cartProductId}`,
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const updateQuantityFromCart = async (data) => {
  const response = await axios.put(
    `${base_url}/user/cart/update-cart/${data?.body?.cartProductId}/${data?.body?.quantityFromCart}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const createOrder = async (data) => {
  const response = await axios.post(
    `${base_url}/user/cart/create-order`,
    data?.body,
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const getMyOrders = async (data) => {
  const response = await axios.get(`${base_url}/user/order/get-my-orders`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
  return response.data;
};

const updateUserProfile = async (data) => {
  const response = await axios.put(
    `${base_url}/user/update-user-profile`,
    data?.body,
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const forgotPasswordToken = async (data) => {
  const response = await axios.post(
    `${base_url}/user/forgot-password-token`,
    data
  );
  return response.data;
};

const resetPassword = async (data) => {
  const response = await axios.put(
    `${base_url}/user/reset-password/${data.token}`,
    { password: data.password }
  );
  return response.data;
};

const userService = {
  registerUser,
  loginUser,
  getWishlistOfUser,
  addToCart,
  getCart,
  deleteProductFromCart,
  updateQuantityFromCart,
  createOrder,
  getMyOrders,
  forgotPasswordToken,
  resetPassword,
  updateUserProfile,
  emptyCart,
};

export default userService;
