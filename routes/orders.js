import express from "express";
import { placeOrder } from "../controllers/orders.js";
export const orderRouter = express.Router();

// test route for api
orderRouter.route("/").post(placeOrder);
// orderRouter.route("/:uid").get().patch();
