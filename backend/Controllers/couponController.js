import couponModel from "../Models/couponModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createCouponController =  async(req , res) => {
    try {
        const newCoupon = await couponModel.create(req.body);
        res.json({ createdCoupon: newCoupon , res : {message:"Coupon Added Successfully",success:true}});
    } catch (error) {
        res.json({
          res: { message: error, success: false },
        });
    }
}

export const getACouponController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const getCoupon = await couponModel.findById(id);
        res.json({gotCoupon:getCoupon,res:{message : "Coupon Received Successfully",success:true}});
    } catch (error) {
        res.json({
          res: { message: error, success: false },
        });
    }
}

export const updateACouponController = async(req , res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
      const updatedCoupon = await couponModel.findByIdAndUpdate(id,req.body,{new:true},);
      res.json({updatedCoupon,res:{message:"Coupon Updated" , success : true}});
    } catch (error) {
      res.json({
          res: { message: error, success: false },
        });
    }
}

export const deleteACouponController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const deletedCoupon = await couponModel.findByIdAndDelete(id);
        res.json({deletedCoupon,res : {message:"Coupon Deleted" , success : true}});
    } catch (error) {
        res.json({
          res: { message: error, success: false },
        });
    }
}

export const getAllCouponsController = async(req , res) => {
    try {
        const allCoupons = await couponModel.find();
        res.json({ coupons: allCoupons , res : {message : "Successfully Fetched",success : true}});
    } catch (error) {
        // throw new Error(error);
        res.json({
          res: { message: error, success: false },
        });
    }
}