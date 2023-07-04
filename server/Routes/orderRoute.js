import express from "express";
import { getAllOrders, getMonthlyOrders, getOrderByOrderId, getOrderByUserIdController, getYearlyOrders, updateOrderStatus } from "../Controllers/orderController.js";
import { authMiddleware, isAdminMiddleware } from "../Middlewares/authMiddleWare.js";

const orderRouter = express.Router();

orderRouter.get("/all-orders",authMiddleware,isAdminMiddleware,getAllOrders);
orderRouter.get("/get-order-by-user-id/:id",authMiddleware,isAdminMiddleware,getOrderByUserIdController);
orderRouter.get("/get-order-by-order-id/:id",authMiddleware,isAdminMiddleware,getOrderByOrderId);
orderRouter.put("/update-order-status/:id",authMiddleware,isAdminMiddleware,updateOrderStatus);
orderRouter.get(
  "/get-monthly-orders",
  authMiddleware,
  isAdminMiddleware,
  getMonthlyOrders
);
orderRouter.get(
  "/get-yearly-orders",
  authMiddleware,
  isAdminMiddleware,
  getYearlyOrders
);

export default orderRouter;