import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getACategoryController,
  getAllCategoryController,
  updateCategoryController,
} from "../Controllers/colorCategoryController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";

const colorCategoryRouter = express.Router();

colorCategoryRouter.get("/get/:id", getACategoryController);
colorCategoryRouter.post(
  "/create",
  authMiddleware,
  isAdminMiddleware,
  createCategoryController
);
colorCategoryRouter.put(
  "/update/:id",
  authMiddleware,
  isAdminMiddleware,
  updateCategoryController
);
colorCategoryRouter.delete(
  "/delete/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteCategoryController
);
colorCategoryRouter.get("/all-color-categories", getAllCategoryController);

export default colorCategoryRouter;
