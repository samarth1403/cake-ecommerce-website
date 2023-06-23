import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getACategoryController,
  getAllCategoryController,
  updateCategoryController,
} from "../Controllers/occasionCategoryController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";

const occasionCategoryRouter = express.Router();

occasionCategoryRouter.get("/category/:id", getACategoryController);
occasionCategoryRouter.post(
  "/create",
  authMiddleware,
  isAdminMiddleware,
  createCategoryController
);
occasionCategoryRouter.put(
  "/update/:id",
  authMiddleware,
  isAdminMiddleware,
  updateCategoryController
);
occasionCategoryRouter.delete(
  "/delete/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteCategoryController
);
occasionCategoryRouter.get("/all-occasions", getAllCategoryController);

export default occasionCategoryRouter;
