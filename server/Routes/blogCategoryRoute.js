import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getACategoryController,
  getAllCategoryController,
  updateCategoryController,
} from "../Controllers/blogCategoryController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";

const blogCategoryRouter = express.Router();

blogCategoryRouter.get("/category/:id", getACategoryController);
blogCategoryRouter.post(
  "/create",
  authMiddleware,
  isAdminMiddleware,
  createCategoryController
);
blogCategoryRouter.put(
  "/update/:id",
  authMiddleware,
  isAdminMiddleware,
  updateCategoryController
);
blogCategoryRouter.delete(
  "/delete/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteCategoryController
);
blogCategoryRouter.get("/all", getAllCategoryController);

export default blogCategoryRouter;
