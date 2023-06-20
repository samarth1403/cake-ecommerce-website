import express from 'express';
import { createEnquiryController, deleteEnquiryController, getAllEnquiriesController, getEnquiryController, updateEnquiryController } from '../Controllers/enquiryController.js';
import { authMiddleware, isAdminMiddleware } from '../Middlewares/authMiddleware.js';

const enquiryRouter = express.Router();

enquiryRouter.post('/create',createEnquiryController);
enquiryRouter.get('/get/:id',getEnquiryController)
enquiryRouter.get('/all',getAllEnquiriesController);
enquiryRouter.put('/update/:id',authMiddleware,isAdminMiddleware,updateEnquiryController);
enquiryRouter.delete("/delete/:id",authMiddleware,isAdminMiddleware,deleteEnquiryController);

export default enquiryRouter;

