import express from "express";
import {
  addToWishListController,
  createProductController,
  deleteAProductController,
  deleteProdImgController,
  getAllProductsController,
  getAProductController,
  rateAProductController,
  updateAProductController,
  uploadProdImgController,
} from "../Controllers/productController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";
import {
  productImgResizeMiddleware,
  uploadPhotoMiddleware,
} from "../Middlewares/uploadImageMiddleware.js";

const productRouter = express.Router();

productRouter.post(
  "/",
  authMiddleware,
  isAdminMiddleware,
  createProductController
);
productRouter.get("/:id", getAProductController);
productRouter.get("/", getAllProductsController);
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

productRouter.put(
  "/uploadImg",
  authMiddleware,
  isAdminMiddleware,
  uploadPhotoMiddleware.array("images", 10),
  productImgResizeMiddleware,
  uploadProdImgController,
);

productRouter.delete(
  "/deleteImg/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteProdImgController
)

export default productRouter;
