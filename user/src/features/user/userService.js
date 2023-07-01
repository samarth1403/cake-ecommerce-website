import axios from 'axios';
import { config } from '../../utils/axiosConfig';
import { base_url } from '../../utils/base_url';

const registerUser = async(data) => {
    const response = await axios.post(`${base_url}/user/register-user`,data);
    return response.data;
}

const loginUser = async(data) => {
    const response = await axios.post(`${base_url}/user/login-user`,data);
    if (response.data.userData !== null){
        localStorage.setItem("customerToken", JSON.stringify(response.data.userData.Token));
    }
    return response.data;
}

const getWishlistOfUser = async() => {
    const response = await axios.get(`${base_url}/user/wishlist/get`,config);
    if (response.data){
       return response.data;
    }
}

const addToCart = async (cartData) => {
  const response = await axios.post(
    `${base_url}/user/cart/create`,
    cartData,
    config
  );
  return response.data;
};

const getCart = async () => {
  const response = await axios.get(
    `${base_url}/user/cart/get`,config
  );
  return response.data;
};

const deleteProductFromCart = async (cartProductId) => {
  console.log(config);
  const response = await axios.delete(
    `${base_url}/user/cart/delete-product/${cartProductId}`,
    config
  );
  return response.data;
};

const updateQuantityFromCart = async ({cartProductId,quantityFromCart}) => {
  const response = await axios.put(
    `${base_url}/user/cart/update-cart/${cartProductId}/${quantityFromCart}`,{},config
  );
  console.log(response.data);
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
};

export default userService;