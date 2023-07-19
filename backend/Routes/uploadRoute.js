import express from "express";
import {
  deleteProdImgController,
  uploadProdImgController,
  uploadBlogImgController,
  deleteBlogImgController,
} from "../Controllers/uploadController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleWare.js";
import {
  productImgResizeMiddleware,
  blogImgResizeMiddleware,
  uploadPhotoMiddleware,
} from "../Middlewares/uploadImageMiddleware.js";

const uploadRouter = express.Router();

uploadRouter.post(
  "/product/uploadImg",
  authMiddleware,
  isAdminMiddleware,
  uploadPhotoMiddleware.array("images", 10),
  productImgResizeMiddleware,
  uploadProdImgController
);

uploadRouter.delete(
  "/product/deleteImg/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteProdImgController
);

uploadRouter.post(
  "/blog/uploadImg",
  authMiddleware,
  isAdminMiddleware,
  uploadPhotoMiddleware.array("images", 3),
  blogImgResizeMiddleware,
  uploadBlogImgController
);

uploadRouter.delete(
  "/blog/deleteImg/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteBlogImgController
);

export default uploadRouter;