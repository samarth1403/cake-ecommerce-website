import productModel from "../Models/productModel.js";
import slugify from "slugify";

export const createProductController = async (req, res) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  try {
    const newProduct = await productModel.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
};

//Get A Product
export const getAProductController = async (req, res) => {
  const {id} = req.params;
  try {
    const foundProduct = await productModel.findById(id);
    res.json(foundProduct);
  } catch (error) {
    throw new Error(error);
  }
};

//Get All Products
export const getAllProductsController = async (req, res) => {

  try {

    //Filtering
    const queryObj = {...req.query};
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((ele)=>delete queryObj[ele]);

    //for price greater than or less than means sorting for a particular range
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(/\b(gte|ge|lte|lt)\b/g , (match)=> `$${match}`)

    let query = productModel.find(JSON.parse(queryString));

    //Sorting
    if(req.query.sort){
       const sortBy = req.query.sort.split(',').join(" ");
       query = query.sort(sortBy);
    }
    else{
        query = query.sort('-createdAt');
    }

    //Limiting the fields 
    if(req.query.fields){
        const fields = req.query.fields.split(",").join(" ");
        query = query.select(fields);
    }
    else{
        query = query.select("-__v");
    }

    //Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1)*limit;
    console.log(page , limit , skip);
    query = query.skip(skip).limit(limit);
    
    if(req.query.page){
      const productCount = await productModel.countDocuments();
      console.log(productCount);
      if(skip >= productCount){
        throw new Error("This page does not Exists");
      }
    }
    const allProducts = await query;
    res.json(allProducts);
  } catch (error) {
    throw new Error(error);
  }
};

//Update A Product
export const updateAProductController = async (req, res) => {
  const { id } = req.params;
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  try {
    const updatedUser = await productModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
};

//Delete A Product
export const deleteAProductController = async (req, res) => {
  const { id } = req.params;
  try {
    await productModel.findByIdAndDelete(id);
    res.json({ message: "Product is Deleted" });
  } catch (error) {
    throw new Error(error);
  }
};
