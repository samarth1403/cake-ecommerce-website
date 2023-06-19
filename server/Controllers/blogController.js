import blogModel from "../Models/blogModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createBlogController = async(req , res) => {
    try {
        const newBlog = await blogModel.create(req.body);
        res.json(newBlog);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateBlogController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const updatedBlog = await blogModel.findByIdAndUpdate({_id:id},req.body,{new : true});
        res.json(updatedBlog);
    } catch (error) {
        throw new Error(error);
    }
}

export const getBlogController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const getblog = await blogModel.findById(id)
          .populate("likes")
          .populate("dislikes");
        await blogModel.findByIdAndUpdate(
          id,
          {
            $inc: { numViews: 1 },
          },
          { new: true }
        );
        res.json(getblog);
    } catch (error) {
        throw new Error(error);
    }
}

export const getAllBlogsController = async(req , res) => {
    try {
        const allBlogs = await blogModel.find();
        res.json(allBlogs);
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteABlogController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        await blogModel.findByIdAndDelete(id);
        res.json({message:"Blog deleted Successfully"});
    } catch (error) {
        throw new Error(error);
    }
}

export const likeABlogController = async(req , res) => {
    const {blogId} = req.body;
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

    if(alreadyDisliked){
        const newblog = await blogModel.findByIdAndUpdate(blogId,{
            $pull : {dislikes : loginUserId},
            isDisliked : false,
        },
        {
            new : true
        },);
        res.json(newblog);
    }

    if(isLiked){
        const newblog = await blogModel.findByIdAndUpdate(
          blogId,
          {
            $pull: { likes: loginUserId },
            isLiked: false,
          },
          {
            new: true,
          }
        );
        res.json(newblog);
    }
    else {
        const newblog = await blogModel.findByIdAndUpdate(
          blogId,
          {
            $push: { likes: loginUserId },
            isLiked: true,
          },
          {
            new: true,
          }
        );
        res.json(newblog);
    }
    
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

  if (alreadyLiked) {
    const newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      {
        new: true,
      }
    );
    res.json(newblog)
  }

  if (isDisliked) {
    const newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      {
        new: true,
      }
    );
    res.json(newblog);
  } else {
    const newblog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      {
        new: true,
      }
    );
    res.json(newblog);
  }
  
};