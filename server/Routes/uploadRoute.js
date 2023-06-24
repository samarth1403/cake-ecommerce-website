import express from "express";
import { deleteProdImgController, uploadProdImgController } from "../Controllers/uploadController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";
import {
  productImgResizeMiddleware,
  uploadPhotoMiddleware,
} from "../Middlewares/uploadImageMiddleware.js";

const uploadRouter = express.Router();

uploadRouter.post(
  "/uploadImg",
  authMiddleware,
  isAdminMiddleware,
  uploadPhotoMiddleware.array("images", 10),
  productImgResizeMiddleware,
  uploadProdImgController
);

uploadRouter.delete(
  "/deleteImg/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteProdImgController
);

export default uploadRouter;