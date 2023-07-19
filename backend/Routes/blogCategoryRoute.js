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

blogCategoryRouter.get("/all-blog-categories", getAllCategoryController);
blogCategoryRouter.get("/get/:id", getACategoryController);
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


export default blogCategoryRouter;
