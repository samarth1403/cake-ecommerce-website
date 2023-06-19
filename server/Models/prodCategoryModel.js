import mongoose from 'mongoose';

// Declare the Schema of the Mongo model
const prodCategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
        index:true,
    },
    subCategoryName:{
        type:String,
        required:true,
        unique:true,
        index:true
    }
},{
    timestamps:true,
});

//Export the model
const prodCategoryModel = mongoose.model("ProdCategory", prodCategorySchema);
export default prodCategoryModel;