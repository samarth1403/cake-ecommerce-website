import {
  cloudinaryDeleteImage,
  cloudinaryUploadImage,
} from "../Utils/cloudinary.js";
import fs from "fs";
//Uploading Images of Products
export const uploadProdImgController = async (req, res) => {
    
  try {
    const uploader = (path) => cloudinaryUploadImage(path, "images");
    const urls = [];
    const files = req.files;
    
    //looping on files
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }

    const images = urls.map((file) => {
      return file;
    });
    // console.log(images);
    res.json({
      images: images,
      res: { message: "Uploaded Successfully", success: true },
    });
  } catch (error) {
    // throw new Error(error);
    res.json({
      res: { message: "Not Uploaded", success: false },
    });
  }
};

//Deleting Images of Products which are uploaded on cloud
export const deleteProdImgController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = cloudinaryDeleteImage(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    throw new Error(error);
  }
};

//Uploading blog images 
export const uploadBlogImgController = async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadImage(path, "images");
    const urls = [];
    const files = req.files;

    //looping on files
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
 
    const images = urls.map((file) => {
          return file;
    });
    res.json({
      images: images,
      res: { message: "Uploaded Successfully", success: true },
    });
    
  } catch (error) {
    throw new Error(error);
  }
};

//Uploading blog images 
export const deleteBlogImgController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = cloudinaryDeleteImage(id, "images");
    res.json({
      images: deleted,
      res: { message: "Deleted Successfully", success: true },
    });
  } catch (error) {
    throw new Error(error);
  }
};
