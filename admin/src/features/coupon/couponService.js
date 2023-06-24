import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_url } from "../../utils/base_url";

const getAllCoupons = async() => {
    const response = await axios.get(`${base_url}/coupon/all-coupons`,config);
    return response.data;
}

const couponService = {
    getAllCoupons
}

export default couponService;