import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const blogCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      index: true,
    },
    subCategoryName: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const blogCategoryModel = mongoose.model("BlogCategory", blogCategorySchema);
export default blogCategoryModel;
