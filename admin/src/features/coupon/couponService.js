import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllCoupons = async(data) => {
    const response = await axios.get(`${base_url}/coupon/all-coupons`, {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    });
    return response.data;
}

const createCoupon = async(data) => {
    const response = await axios.post(`${base_url}/coupon/create`, data?.body, {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    });
    return response.data;
}

const getCoupon = async(data) => {
    const response = await axios.get(`${base_url}/coupon/get/${data?.id}`, {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    });
    return response.data;
}

const updateCoupon = async (data) => {
  const response = await axios.put(
    `${base_url}/coupon/update/${data?.id}`,
    {
      name: data.couponData.name,
      discount: data.couponData.discount,
      expiry: data.couponData.expiry,
    },
    {
      headers: {
        Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};

const deleteCoupon = async (data) => {
  const response = await axios.delete(`${base_url}/coupon/delete/${data?.id}`, {
    headers: {
      Authorization: `Bearer ${data?.Token !== null ? data?.Token : ""}`,
      Accept: "application/json",
    },
  });
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