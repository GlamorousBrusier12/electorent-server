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
