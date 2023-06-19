import occasionCategoryModel from "../Models/occasionCategoryModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createCategoryController = async (req, res) => {
  try {
    const newCategory = await occasionCategoryModel.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedCategory = await occasionCategoryModel.findByIdAndUpdate(
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
    await occasionCategoryModel.findByIdAndDelete(id);
    res.json({ message: "Occasion Name Deleted" });
  } catch (error) {
    throw new Error(error);
  }
};

export const getACategoryController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await occasionCategoryModel.findById(id);
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllCategoryController = async (req, res) => {
  try {
    const allCategorys = await occasionCategoryModel.find();
    res.json(allCategorys);
  } catch (error) {
    throw new Error(error);
  }
};
