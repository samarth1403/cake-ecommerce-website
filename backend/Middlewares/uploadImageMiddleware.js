import multer from 'multer';//it manages multi-form data
import sharp from 'sharp';//it can modify our images
import path from 'path';//we will first store images in local and then on cloud
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage =  multer.diskStorage({
    destination : function ( req , file , callback){
        callback(null , path.join( __dirname , "../public/images/"));
    },
    filename : function (req , file , callback){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9);
        callback(null , file.fieldname+"-"+uniqueSuffix+".jpeg");
    },
})

const multerFilter = (req , file , callback) => {
    if(file.mimetype.startsWith("image")){
        callback(null,true);
    }
    else{
        callback({message:"Unsupported File Format"},false);
    }
}

export const uploadPhotoMiddleware = multer({
    storage : storage,
    fileFilter : multerFilter,
    limits : { fileSize : 1000000},//2 MB
})

export const productImgResizeMiddleware = async(req , res , next) => {
    if(!req.files){
        return next();
    }
    await Promise.all(
        req.files.map(async (file) => {
            await sharp(file.path)
            .resize(300,300)
            .toFormat("jpeg")
            .jpeg({quality:90})
            .toFile(`public/images/products/${file.filename}`);
            fs.unlinkSync(`public/images/products/${file.filename}`);          
        })
    );
    next();
}

export const blogImgResizeMiddleware = async (req, res, next) => {
  if (!req.files) {
    return next();
  }
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename}`);
         fs.unlinkSync(`public/images/blogs/${file.filename}`);
    })
  );
  next();
};