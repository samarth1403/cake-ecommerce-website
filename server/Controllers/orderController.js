import orderModel from "../Models/orderModel.js";

export const getAllOrders = async (req, res) => {
  try {
    const alluserorders = await orderModel
      .find()
      .populate("products.product")
      .populate("orderBy")
      .exec();
    res.json({ orders: alluserorders , res : {message : "Successfully Fetched",success : true}});
  } catch (error) {
    // throw new Error(error);
    res.json({ res : { message : "Not Fetched" , success : false}});
  }
};