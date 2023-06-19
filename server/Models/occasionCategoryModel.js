import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const occasionCategorySchema = new mongoose.Schema(
  {
    occasionName: {
      type: String,
      required: true,
      unique:true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const occasionCategoryModel = mongoose.model("OccasionCategory", occasionCategorySchema);
export default occasionCategoryModel;
