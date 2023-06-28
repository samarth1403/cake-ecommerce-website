import orderModel from "../Models/orderModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

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
    res.json({ res : { message : error , success : false}});
  }
};

//Getting orders by user Id 
export const getOrderByUserIdController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const userOrders = await orderModel
      .findOne({ orderBy: id })
      .populate("products.product")
      .populate("orderBy")
      .exec();
    res.json({userOrders, res:{message:"Users orders Got Successfully", success : true}});
  } catch (error) {
    res.json({ res: { message: error, success: false } });
  }
};
