import mongoose from 'mongoose';

// Declare the Schema of the Mongo model
const cartSchema = new mongoose.Schema({
  userId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  productId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product"
  },
  quantity: {
    type: Number,
    required: true,
    default : 1
  },
  weight:{
    type: Number,
    required: true,
  },
  veg:{
    type: Boolean,
    required : true,
  },
  shape:{
    type: String,
    required : true
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "ColorCategory"
  }
  // products: [
  //   {
  //     product: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Product",
  //     },
  //     count: Number,
  //     color: String,
  //     price: Number,
  //   },
  // ],

  // cartTotal : Number,
  // totalAfterDiscount : Number,

  // orderBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
},
{
    timestamps : true,
}
);

//Export the model
const cartModel = mongoose.model('Cart', cartSchema);
export default cartModel;