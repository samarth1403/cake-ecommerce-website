import express from "express";
import {
  addToWishListController,
  createProductController,
  deleteAProductController,
  getAllProductsController,
  getAProductController,
  rateAProductController,
  updateAProductController,
} from "../Controllers/productController.js";
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
  "/edit-product/:id",
  authMiddleware,
  isAdminMiddleware,
  updateAProductController
);
productRouter.delete(
  "/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteAProductController
);

productRouter.put("/wishList", authMiddleware, addToWishListController);
productRouter.put("/ratings", authMiddleware, rateAProductController);


export default productRouter;
