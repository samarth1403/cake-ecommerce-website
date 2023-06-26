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

const couponService = {
    getAllCoupons,
    createCoupon,
}

export default couponService;