import colorCategoryModel from "../Models/colorCategoryModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createCategoryController = async (req, res) => {
  try {
    const newCategory = await colorCategoryModel.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
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
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await colorCategoryModel.findByIdAndDelete(id);
    res.json({ message: "color Name Deleted" });
  } catch (error) {
    throw new Error(error);
  }
};

export const getACategoryController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await colorCategoryModel.findById(id);
    res.json(category);
  } catch (error) {
    throw new Error(error);
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
      res: { message: "Not Fetched", success: false },
    });
  }
};
