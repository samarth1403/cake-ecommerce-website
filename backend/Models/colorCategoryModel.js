import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const colorCategorySchema = new mongoose.Schema(
  {
    colorName: {
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
const colorCategoryModel = mongoose.model(
  "ColorCategory",
  colorCategorySchema
);
export default colorCategoryModel;
