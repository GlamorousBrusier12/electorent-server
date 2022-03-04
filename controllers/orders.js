import { Order } from "../models/Orders.js";

export const placeOrder = async (req, res) => {
  try {
    // assume user is logged in and we have user in req.user
    const userId = "621e6d0cf58d562995742339";
    const newOrder = await Order.create({
      userId,
      ...req.body,
      status: "ordered",
    });
    res
      .status(201)
      .json({ message: "order placed sucessfully", orderId: newOrder.id });
  } catch (error) {
    console.log("error in placing the order ", error);
    res.status(500).end();
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const userOrders = await Order.find({});
    res.status(200).json({
      userOrders,
    });
  } catch (error) {
    console.log("error in retreiving the order details of the user", error);
    res.status(500).end();
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userOrders = await Order.find({
      userId,
    });
    res.status(200).json({
      userOrders,
    });
  } catch (error) {
    console.log("error in retreiving the order details of the user", error);
    res.status(500).end();
  }
};
