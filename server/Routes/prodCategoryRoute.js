import express from 'express';
import { createCategoryController, deleteCategoryController, getACategoryController, getAllCategoryController, updateCategoryController } from '../Controllers/prodCategoryController.js';
import { authMiddleware, isAdminMiddleware } from '../Middlewares/authMiddleWare.js';

const prodCategoryRouter = express.Router();

prodCategoryRouter.get('/category/:id',getACategoryController);
prodCategoryRouter.post('/create',authMiddleware,isAdminMiddleware,createCategoryController);
prodCategoryRouter.put('/update/:id',authMiddleware,isAdminMiddleware,updateCategoryController);
prodCategoryRouter.delete("/delete/:id",authMiddleware,isAdminMiddleware,deleteCategoryController);
prodCategoryRouter.get("/all-product-categories", getAllCategoryController);

export default prodCategoryRouter;