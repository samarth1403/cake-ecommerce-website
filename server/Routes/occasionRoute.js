import express from "express";
import {
  createOccasionController,
  deleteOccasionController,
  getAOccasionController,
  getAllOccasionsController,
  updateOccasionController,
} from "../Controllers/occasionController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";

const occasionRouter = express.Router();

occasionRouter.get("/category/:id", getAOccasionController);
occasionRouter.post(
  "/create",
  authMiddleware,
  isAdminMiddleware,
  createOccasionController
);
occasionRouter.put(
  "/update/:id",
  authMiddleware,
  isAdminMiddleware,
  updateOccasionController
);
occasionRouter.delete(
  "/delete/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteOccasionController
);
occasionRouter.get("/all-occasions", getAllOccasionsController);

export default occasionRouter;
