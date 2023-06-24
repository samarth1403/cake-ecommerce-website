import mongoose from 'mongoose';

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    images: [{
      public_id:String,
      url:String
    }],
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    weight: {
      type: String,
      default: "500 gm",
    },
    isVeg: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    shape: {
      type: String,
      default: "circular",
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
      //select:false,//hidding permanantly from user
    },
    ratings: [
      {
        star: Number,
        comment: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    totalRating: {
      type: String,
      default: 0,
    },
    color: [],
    tags: [],
  },
  { timestamps: true }
);

//Export the model
const productModel = mongoose.model('Product', productSchema);
export default productModel;