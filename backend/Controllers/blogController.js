import blogModel from "../Models/blogModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createBlogController = async(req , res) => {
    try {
        const newBlog = await blogModel.create(req.body);
        res.json({ createdBlog: newBlog , res : {message:"Blog Created Successfully",success : true}});
    } catch (error) {
        res.json({
          res: { message: error, success: false },
        });
    }
}

export const updateBlogController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const updatedBlog = await blogModel.findByIdAndUpdate({_id:id},req.body,{new : true});
        res.json({
          updatedBlog,
          res: { message: "Blog Updated Successfully", success: true },
        });
    } catch (error) {
        res.json({
          res: { message: error, success: false },
        });
    }
}

export const getBlogController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const gotBlog = await blogModel.findById(id)
          .populate("likes")
          .populate("dislikes");
        await blogModel.findByIdAndUpdate(
          id,
          {
            $inc: { numViews: 1 },
          },
          { new: true }
        );
        res.json({
          gotBlog,
          res: { message: "Blog Got Successfully", success: true },
        });
    } catch (error) {
        res.json({
          res: { message: error, success: false },
        });
    }
}

export const getAllBlogsController = async(req , res) => {
    try {
        const allBlogs = await blogModel.find();
        res.json({
          blogs: allBlogs,
          res: { message: "Successfully Fetched", success: true },
        });
    } catch (error) {
        // throw new Error(error);
        res.json({
          res: { message: error, success: false },
        });
    }
}

export const deleteABlogController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const deletedBlog = await blogModel.findByIdAndDelete(id);
        res.json({deletedBlog, res : {message:"Blog deleted Successfully", success : true}});
    } catch (error) {
        res.json({
          res: { message: error, success: false },
        });
    }
}

export const likeABlogController = async(req , res) => {
  const { blogId } = req.body;
  validateMongodbId(blogId);

  //finding the blog which you want to be liked
  const blog = await blogModel.findById(blogId);
  //finding the login user because only registered user can like
  const loginUserId = req?.user?._id;
  //finding if the user liked the blog
  const isLiked = blog?.isLiked;
  //finding if the user already disliked the blog
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId.toString()
  );

  //Getting a updated blog
  let newblog;

  if (alreadyDisliked) {
    newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
  }

  if (isLiked) {
    newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
  } else {
    newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      {
        new: true,
      }
    );
  }
  res.json(newblog);
}

export const dislikeABlogController = async (req, res) => {
  const { blogId } = req.body;
  validateMongodbId(blogId);

  //finding the blog which you want to be liked
  const blog = await blogModel.findById(blogId);
  //finding the login user because only registered user can like
  const loginUserId = req?.user?._id;
  //finding if the user disliked the blog
  const isDisliked = blog?.isDisliked;
  //finding if the user already liked the blog
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId.toString()
  );

  //Getting a updated blog
  let newblog;
  if (alreadyLiked) {
    newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
  }

  if (isDisliked) {
    newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
  } else {
    newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
  }
    res.json(newblog);
};