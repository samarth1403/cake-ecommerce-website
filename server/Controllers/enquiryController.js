import enquiryModel from "../Models/enquiryModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const createEnquiryController = async(req , res) => {
    try {
        const newEnquiry = await enquiryModel.create(req.body);
        res.json(newEnquiry);
    } catch (error) {
        throw new Error(error);
    }
}

export const getEnquiryController = async(req , res) => {
    const {id} = req.params
    validateMongodbId(id);

    try {
        const gotEnquiry = await enquiryModel.findById(id);
        res.json({gotEnquiry, res : {message:"Enquiry Got Successfully", success : true}});
    } catch (error) {
         res.json({ res: { message: error, success: false } });
    }
}

export const getAllEnquiriesController = async(req , res) => {
    try {
        const allEnquiries = await enquiryModel.find();
        res.json({ enquiries: allEnquiries , res : {message : "Successfully Fetched" , success : true}});
    } catch (error) {
        // throw new Error(error);
        res.json({ res: { message: error, success: false } });
    }
}

export const updateEnquiryController = async(req , res) => {
    const {id} = req.params;
     validateMongodbId(id);

    try {
       const updatedEnquiry = await enquiryModel.findByIdAndUpdate(id,req.body,{new : true});
       res.json({
         updatedEnquiry,
         res: { message: "Enquiry Updated Successfully", success: true },
       }); 
    } catch (error) {
        res.json({ res: { message: error, success: false } });
    }
}

export const deleteEnquiryController = async(req , res) => {
    const {id} = req.params
    validateMongodbId(id);

    try {
        const deletedEnquiry = await enquiryModel.findByIdAndDelete(id);
        res.json({deletedEnquiry,res:{message:"Enquiry Deleted", success: true}});
    } catch (error) {
        res.json({ res: { message: error, success: false } });
    }
}