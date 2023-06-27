import occasionModel from "../Models/occasionModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createOccasionController = async (req, res) => {
  try {
    const newCategory = await occasionModel.create(req.body);
    res.json({ createdOccasion: newCategory , res : {message:"Successfully Created" , success : true}});
  } catch (error) {
    res.json({
      res: { message: error, success: false },
    });
  }
};

export const updateOccasionController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedOccasion = await occasionModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json({ updatedOccasion , res : "Updated Successfully" , success : true});
  } catch (error) {
    res.json({res : error , success : false});
  } 
};

export const deleteOccasionController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    await occasionModel.findByIdAndDelete(id);
    res.json({ message: "Occasion Name Deleted" });
  } catch (error) {
    throw new Error(error);
  }
};

export const getAOccasionController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const category = await occasionModel.findById(id);
    res.json({ gotOccasion : category , res : { message : "Occasion Got Successfully",success:true}});
  } catch (error) {
    res.json({ res: { message: error, success: false } });
  }
};

export const getAllOccasionsController = async (req, res) => {
  try {
    const allCategorys = await occasionModel.find();
    res.json({
      occasions: allCategorys,
      res: { message: "Successfully Fetched", success: true },
    });
  } catch (error) {
    // throw new Error(error);
    res.json({
      res: { message: error, success: false },
    });
  }
};
