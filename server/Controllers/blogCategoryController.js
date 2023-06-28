import blogCategoryModel from "../Models/blogCategoryModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createCategoryController = async (req, res) => {
  try {
    const newCategory = await blogCategoryModel.create(req.body);
    res.json({ createdCategory: newCategory , res : {message : "Created Successfully", success : true}});
  } catch (error) {
    res.json({
      res: { message: error, success: false },
    });
  }
};

export const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedCategory = await blogCategoryModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json({
      updatedBlogCategory: updatedCategory,
      res: "Blog Category Updated Successfully",
      success: true,
    });
  } catch (error) {
    res.json({ res: error, success: false });
  }
};

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await blogCategoryModel.findByIdAndDelete(id);
  res.json({
    deletedBlogCategory,
    res: { message: "Blog Categoy Deleted Successfully", success: true },
  });
  } catch (error) {
    res.json({ res: error, success: false });
  }
};

export const getACategoryController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await blogCategoryModel.findById(id);
    res.json({
      gotBlogCategory: category,
      res: { message: "BLog Category Got Successfully", success: true },
    });
  } catch (error) {
    res.json({ res: error, success: false });
  }
};

export const getAllCategoryController = async (req, res) => {
  try {
    const allCategories = await blogCategoryModel.find();
    res.json({
      blogCategories: allCategories,
      res: { message: "Successfully Fetched", success: true },
    });
  } catch (error) {
    // throw new Error(error);
    res.json({
      res: { message: error, success: false },
    });
  }
};
