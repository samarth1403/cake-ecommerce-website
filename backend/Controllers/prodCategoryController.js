import prodCategoryModel from "../Models/prodCategoryModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createCategoryController = async(req , res) => {
    try {
        const newCategory = await prodCategoryModel.create(req.body);
        res.json({ createdCategory: newCategory , res : {message : "Created Successfully" , success : true}});
    } catch (error) {
        res.json({ res: { message: error, success: false } });
    }
}

export const updateCategoryController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const updatedProdCategory = await prodCategoryModel.findByIdAndUpdate(id,req.body,{new:true});
        res.json({
          updatedProdCategory,
          res: { message: "Category Updated", success: true },
        });
    } catch (error) {
      res.json({
        res: { message: error, success: false },
      });
    }
}

export const deleteCategoryController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const deletedProdCategory = await prodCategoryModel.findByIdAndDelete(id);
        res.json({deletedProdCategory, res :{message:"Category Deleted", success : true}});
    } catch (error) {
      res.json({
        res: {message:error, success: false},
      });
    }
}

export const getACategoryController = async(req , res) => {
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const category = await prodCategoryModel.findById(id);
        res.json({gotProdCategory:category , res : { message : "Category Got Successfully" , success : true}});
    } catch (error) {
       res.json({
         res: { message: error, success: false },
       });
    }
}

export const getAllCategoryController = async(req , res) => {
    try {
        const allCategorys = await prodCategoryModel.find();
        res.json({
          prodCategories: allCategorys,
          res: { message: "Successfully Fetched", success: true },
        });
    } catch (error) {
        // throw new Error(error);
        res.json({
          res: { message: error, success: false },
        });
    }
}