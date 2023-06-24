import express from "express";
import { getAllOrders } from "../Controllers/orderController.js";
import { authMiddleware, isAdminMiddleware } from "../Middlewares/authMiddleWare.js";

const orderRouter = express.Router();

orderRouter.get("/all-orders",authMiddleware,isAdminMiddleware,getAllOrders);

export default orderRouter;