import colorCategoryModel from "../Models/colorCategoryModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createCategoryController = async (req, res) => {
  try {
    const newCategory = await colorCategoryModel.create(req.body);
    res.json({ createdColor: newCategory , res : {message : "Color Created Successfully", success : true}});
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
    const updatedCategory = await colorCategoryModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json({
      updatedColorCategory: updatedCategory,
      res: "Updated Successfully",
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
    const deletedColorCategory = await colorCategoryModel.findByIdAndDelete(id);
    res.json({
      deletedColorCategory,
      res: { message: "Color Deleted Successfully", success: true },
    });
  } catch (error) {
    res.json({ res: error, success: false });
  }
};

export const getACategoryController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await colorCategoryModel.findById(id);
    res.json({
      gotColorCategory: category,
      res: { message: "Color Got Successfully", success: true },
    });
  } catch (error) {
    res.json({ res: error, success: false });
  }
};

export const getAllCategoryController = async (req, res) => {
  try {
    const allCategories = await colorCategoryModel.find();
    res.json({
      colorCategories: allCategories,
      res: { message: "Successfully Fetched", success: true },
    });
  } catch (error) {
    // throw new Error(error);
    res.json({
      res: { message: error, success: false },
    });
  }
};
