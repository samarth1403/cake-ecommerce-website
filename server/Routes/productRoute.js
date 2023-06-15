import express from 'express';
import { createProductController, deleteAProductController, getAllProductsController, getAProductController, updateAProductController } from '../Controllers/productController.js';
import { authMiddleware, isAdminMiddleware } from '../Middlewares/authMiddleWare.js';

const productRouter = express.Router();

productRouter.post('/',authMiddleware,isAdminMiddleware,createProductController);
productRouter.get("/:id",getAProductController);
productRouter.get("/",getAllProductsController);
productRouter.put("/edit-product/:id",authMiddleware,isAdminMiddleware,updateAProductController);
productRouter.delete("/:id",authMiddleware,isAdminMiddleware,deleteAProductController);

export default productRouter;