import express from "express";
import {
  deleteOrder,
  getAllOrders,
  getUserOrders,
  placeMultipleOrders,
  placeOrder,
  updateOrder,
} from "../controllers/orders.js";
import verifyToken from "../middleware/verifytoken.js";
export const orderRouter = express.Router();

// test route for api
orderRouter.route("/").post(verifyToken, placeMultipleOrders).get(getAllOrders);

// get user related orders
orderRouter.route("/:userId").get(getUserOrders);

orderRouter.route("/:orderId").patch(updateOrder).delete(deleteOrder);
