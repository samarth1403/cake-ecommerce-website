import orderModel from "../Models/orderModel.js";
import { validateMongodbId } from "../Utils/validateMongodbId.js";

export const getAllOrders = async (req, res) => {
  try {
    const alluserorders = await orderModel
      .find()
      .populate("user")
      .populate("orderItems.product")
      .populate("orderItems.color")
      .exec();
    res.json({ orders: alluserorders , res : {message : "Successfully Fetched",success : true}});
  } catch (error) {
    // throw new Error(error);
    res.json({ res : { message : error , success : false}});
  }
};

export const getOrderByOrderId= async (req, res) => {
  const {id} = req.params
  try {
    const gotOrderByOrderId = await orderModel
      .findById({ _id: id })
      .populate("user")
      .populate("orderItems.product")
      .populate("orderItems.color")
      .exec();
    res.json({
      gotOrderByOrderId,
      res: { message: "Successfully Fetched", success: true },
    });
  } catch (error) {
    // throw new Error(error);
    res.json({ res: { message: error, success: false } });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await orderModel
      .findByIdAndUpdate(id,{orderStatus:req.body.status},{new : true})
    // orderModel.orderStatus = req.body.status;
    // await updatedOrder.save();

    res.json({
      updatedOrder,
      res: { message: "Successfully Fetched", success: true },
    });
  } catch (error) {
    // throw new Error(error);
    res.json({ res: { message: error, success: false } });
  }
};

//Getting orders by user Id 
export const getOrderByUserIdController = async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const userOrders = await orderModel
      .find({ user : id })
      .populate("user")
      .populate("orderItems.product")
      .populate("orderItems.color")
      .exec();
    res.json({userOrders, res:{message:"Users orders Got Successfully", success : true}});
  } catch (error) {
    res.json({ res: { message: error, success: false } });
  }
};

export const getMonthlyOrders = async (req, res) => {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  let endDate = "";
  d.setDate(1);
  for (let index = 0; index < 11; index++) {
    d.setMonth(d.getMonth() - 1);
    endDate = monthNames[d.getMonth()] + " " + d.getFullYear();
  }

  const data = await orderModel.aggregate([
    {
      $match: {
        createdAt: {
          $lte: new Date(),
          $gte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: {
          month: "$month",
        },
        amount: { $sum: "$totalPriceAfterDiscount" },
        count: { $sum: 1 },
      },
    },
  ]);
  res.json(data);
};

export const getYearlyOrders = async (req, res) => {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  let endDate = "";
  d.setDate(1);
  for (let index = 0; index < 11; index++) {
    d.setMonth(d.getMonth() - 1);
    endDate = monthNames[d.getMonth()] + " " + d.getFullYear();
  }

  const data = await orderModel.aggregate([
    {
      $match: {
        createdAt: {
          $lte: new Date(),
          $gte: new Date(endDate),
        },
      },
    },
    {
      $group: {
        _id: null,
        count: { $sum: 1 },
        amount: { $sum: "$totalPriceAfterDiscount" },
      },
    },
  ]);
  res.json(data);
};
