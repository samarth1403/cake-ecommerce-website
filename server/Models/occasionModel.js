import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const occasionSchema = new mongoose.Schema(
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
const occasionModel = mongoose.model("Occasion", occasionSchema);
export default occasionModel;
