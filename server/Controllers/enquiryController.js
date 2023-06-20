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
        const foundEnquiry = await enquiryModel.findById(id);
        res.json(foundEnquiry);
    } catch (error) {
        throw new Error(error);
    }
}

export const getAllEnquiriesController = async(req , res) => {
    try {
        const allEnquiries = await enquiryModel.find();
        res.json(allEnquiries);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateEnquiryController = async(req , res) => {
    const {id} = req.params;
     validateMongodbId(id);

    try {
       const updatedEnquiry = await enquiryModel.findByIdAndUpdate(id,req.body,{new : true});
       res.json(updatedEnquiry); 
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteEnquiryController = async(req , res) => {
    const {id} = req.params
    validateMongodbId(id);

    try {
        await enquiryModel.findByIdAndDelete(id);
        res.json({message:"Enquiry Deleted"});
    } catch (error) {
        throw new Error(error);
    }
}