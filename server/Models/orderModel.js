import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    contactInfo: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      mobile: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      landmark: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
    },
    paymentInfo: {
      razorpayOrderId: {
        type: String,
        required: true,
      },
      razorpayPaymentId: {
        type: String,
        required: true,
      },
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        color: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ColorCategory",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        weight: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        veg: {
          type: Boolean,
          required: true,
        },
        shape: {
          type: String,
          required: true,
        },
      },
    ],
    paidAt: {
      type: Date,
      default: Date.now(),
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    month:{
      type:String,
      default: new Date().getMonth()
    },
    totalPriceAfterDiscount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "Ordered",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;
