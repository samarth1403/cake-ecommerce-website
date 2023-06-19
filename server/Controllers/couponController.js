import couponModel from "../Models/couponModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createCouponController =  async(req , res) => {
    try {
        const newCoupon = await couponModel.create(req.body);
        res.json(newCoupon);
    } catch (error) {
        throw new Error(error);
    }
}

export const getACouponController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const getCoupon = await couponModel.findById(id);
        res.json(getCoupon);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateACouponController = async(req , res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
      const updatedCoupon = await couponModel.findByIdAndUpdate(id,req.body,{new:true},);
      res.json(updatedCoupon);
    } catch (error) {
      throw new Error(error);
    }
}

export const deleteACouponController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        await couponModel.findByIdAndDelete(id);
        res.json({message:"Coupon Deleted"});
    } catch (error) {
        throw new Error(error);
    }
}

export const getAllCouponsController = async(req , res) => {
    try {
        const allCoupons = await couponModel.find();
        res.json(allCoupons);
    } catch (error) {
        throw new Error(error);
    }
}