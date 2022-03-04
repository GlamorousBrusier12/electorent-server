import express from "express";
import { getUserOrders, placeOrder } from "../controllers/orders.js";
export const orderRouter = express.Router();

// test route for api
orderRouter.route("/").post(placeOrder);

// get all orders
orderRouter.route("/").get(getUserOrders);

// get all orders
orderRouter.route("/:userId").get(getUserOrders);
