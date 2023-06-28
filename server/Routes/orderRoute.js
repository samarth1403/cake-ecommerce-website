import express from "express";
import { getAllOrders, getOrderByUserIdController } from "../Controllers/orderController.js";
import { authMiddleware, isAdminMiddleware } from "../Middlewares/authMiddleWare.js";

const orderRouter = express.Router();

orderRouter.get("/all-orders",authMiddleware,isAdminMiddleware,getAllOrders);
orderRouter.get("/get-order-by-user-id/:id",authMiddleware,isAdminMiddleware,getOrderByUserIdController);

export default orderRouter;