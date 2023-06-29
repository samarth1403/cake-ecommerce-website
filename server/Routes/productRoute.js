import express from "express";
import {
  createProductController,
  deleteAProductController,
  getAllProductsController,
  getAProductController,
  rateAProductController,
  updateAProductController,
} from "../Controllers/productController.js";
import { addToWishListController } from "../Controllers/wishlistController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";


const productRouter = express.Router();


productRouter.post(
  "/create",
  authMiddleware,
  isAdminMiddleware,
  createProductController
);

productRouter.get("/get/:id", getAProductController);
productRouter.get("/all-products", getAllProductsController);

productRouter.put(
  "/update/:id",
  authMiddleware,
  isAdminMiddleware,
  updateAProductController
);
productRouter.delete(
  "/delete/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteAProductController
);


productRouter.put("/ratings", authMiddleware, rateAProductController);

productRouter.put("/add-to-wishlist", authMiddleware, addToWishListController);


export default productRouter;
