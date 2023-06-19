import express from 'express';
import { createCouponController, deleteACouponController, getACouponController, getAllCouponsController, updateACouponController } from '../Controllers/couponController.js';
import { authMiddleware, isAdminMiddleware } from '../Middlewares/authMiddleWare.js';

const couponRouter = express.Router();

couponRouter.post('/create' , authMiddleware , isAdminMiddleware , createCouponController);
couponRouter.get('/get/:id' , authMiddleware , isAdminMiddleware , getACouponController);
couponRouter.put('/update/:id' , authMiddleware , isAdminMiddleware , updateACouponController);
couponRouter.delete('/delete/:id' , authMiddleware , isAdminMiddleware , deleteACouponController);
couponRouter.get('/all' , authMiddleware , isAdminMiddleware , getAllCouponsController);

export default couponRouter;