import productModel from "../Models/productModel.js";
import slugify from "slugify";
import { validateMongodbId } from "../Utils/validateMongodbId.js";
import userModel from "../Models/userModel.js";


export const createProductController = async (req, res) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  try {
    const newProduct = await productModel.create(req.body);
    res.json({ createdProduct : newProduct , res : { message : "Product Created", success : true}});
  } catch (error) {
    res.json({res:{message:error,success:false}});
  }
};

//Get A Product
export const getAProductController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const gotProduct = await productModel.findById(id).populate("color").populate("ratings.postedBy")
    res.json({ gotProduct , res : {message : "Product Got Successfully" , success : true}});
  } catch (error) {
    res.json({ res: { message: error, success: false } });
  }
};

//Get All Products
export const getAllProductsController = async (req, res) => {
  try {
    //Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((ele) => delete queryObj[ele]);

    //for price greater than or less than means sorting for a particular range
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|ge|lte|lt)\b/g,
      (match) => `$${match}`
    );

    let query = productModel.find(JSON.parse(queryString));

    //Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    //Limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    //Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    console.log(page, limit, skip);
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const productCount = await productModel.countDocuments();
      if (skip >= productCount) {
        throw new Error("This page does not Exists");
      }
    }
    const allProducts = await query;
    res.json({ products: allProducts , res : {message : "Successfully Fetched" , success :true}});
  } catch (error) {
    // throw new Error(error);
    res.json({
      res: { message: error, success: false },
    });
  }
};

//Update A Product
export const updateAProductController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.json({
      updatedProduct,
      res: { message: "Product Updated Successfully", success: true },
    });
  } catch (error) {
    res.json({
      res: { message: error, success: false },
    });
  }
};

//Delete A Product
export const deleteAProductController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  try {
    const deletedProduct = await productModel.findByIdAndDelete(id);
    res.json({deletedProduct , res : { message: "Product is Deleted" , success: true}});
  } catch (error) {
   res.json({
     res: { message: error, success: false },
   });
  }
};

//Giving Rating to Product
export const rateAProductController = async (req, res) => {
  const { _id } = req?.user;
  const { star, comment, prodId } = req.body;

  try {
    const product = await productModel.findById(prodId);
    //cheking if product is already rated (posted = Id)
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );

    if (alreadyRated) {
      const updateRating = await productModel.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    }
    else {
      const rateAProduct = await productModel.findByIdAndUpdate(prodId,{
        $push : {
          ratings : {
             star : star,
             comment : comment,
             postedBy : _id,
          },
        },
      },
      {
        new : true,
      });
    }

    //Finding total rating
    const getAllRatings = await productModel.findById(prodId);
    let totalRating = getAllRatings.ratings.length;
    let ratingSum = getAllRatings.ratings.map((item) => item.star).reduce((prev , curr) => prev + curr , 0);
    let actualRating = Math.round(ratingSum / totalRating);
    //Updating total rating of a particular product
    let finalProduct = await productModel.findByIdAndUpdate(prodId,{
      totalRating : actualRating,
    },
    {
      new : true,
    })
    
    res.json({
      ratedProduct: finalProduct,
      res: { message: "Rating to a Product is Done" , success : true},
    });
  
  } catch (error) {
    res.json({message:error, success : false})
  }
};
