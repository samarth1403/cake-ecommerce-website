import express from 'express';
import { createBlogController, deleteABlogController, dislikeABlogController, getAllBlogsController, getBlogController, likeABlogController, updateBlogController } from '../Controllers/blogController.js';
import { authMiddleware , isAdminMiddleware } from '../Middlewares/authMiddleware.js';

const blogRouter = express.Router();

blogRouter.post("/create", authMiddleware, isAdminMiddleware,createBlogController);

blogRouter.put("/update/:id", authMiddleware, isAdminMiddleware, updateBlogController);

blogRouter.put("/likes", authMiddleware, likeABlogController);
blogRouter.put("/dislikes", authMiddleware, dislikeABlogController);

blogRouter.get("/:id", getBlogController);
blogRouter.get('/',getAllBlogsController);


blogRouter.delete(
  "/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteABlogController
);

export default blogRouter;