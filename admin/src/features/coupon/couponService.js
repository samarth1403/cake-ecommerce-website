import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllCoupons = async() => {
    const response = await axios.get(`${base_url}/coupon/all-coupons`,config);
    return response.data;
}

const createCoupon = async(data) => {
    const response =  await axios.post(`${base_url}/coupon/create`,data,config);
    return response.data;
}

const getCoupon = async(id) => {
    const response = await axios.get(`${base_url}/coupon/get/${id}`,config);
    return response.data;
}

const updateCoupon = async (data) => {
  const response = await axios.put(
    `${base_url}/coupon/update/${data.id}`,
    {
      name: data.couponData.name,
      discount: data.couponData.discount,
      expiry: data.couponData.expiry,
    },
    config
  );
  return response.data;
};

const deleteCoupon = async (id) => {
  const response = await axios.delete(
    `${base_url}/coupon/delete/${id}`,
    config
  );
  return response.data;
};

const couponService = {
    getAllCoupons,
    createCoupon,
    getCoupon,
    updateCoupon,
    deleteCoupon,
}

export default couponService;