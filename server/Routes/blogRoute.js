import express from "express";
import {
  createBlogController,
  deleteABlogController,
  deleteBlogImgController,
  dislikeABlogController,
  getAllBlogsController,
  getBlogController,
  likeABlogController,
  updateBlogController,
  uploadBlogImgController,
} from "../Controllers/blogController.js";
import {
  authMiddleware,
  isAdminMiddleware,
} from "../Middlewares/authMiddleware.js";
import { blogImgResizeMiddleware, uploadPhotoMiddleware } from "../Middlewares/uploadImageMiddleware.js";

const blogRouter = express.Router();

blogRouter.post(
  "/create",
  authMiddleware,
  isAdminMiddleware,
  createBlogController
);

blogRouter.put(
  "/update/:id",
  authMiddleware,
  isAdminMiddleware,
  updateBlogController
);

blogRouter.put("/likes", authMiddleware, likeABlogController);
blogRouter.put("/dislikes", authMiddleware, dislikeABlogController);

blogRouter.get("/:id", getBlogController);
blogRouter.get("/", getAllBlogsController);

blogRouter.put(
  "/uploadImg",
  authMiddleware,
  isAdminMiddleware,
  uploadPhotoMiddleware.array("images", 3),
  blogImgResizeMiddleware,
  uploadBlogImgController,
);

blogRouter.delete(
  "/deleteImg/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteBlogImgController
)

blogRouter.delete(
  "/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteABlogController
);

export default blogRouter;
