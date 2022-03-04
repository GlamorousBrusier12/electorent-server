import express from "express";
import { userRouter } from "./user.js";
export const indexRouter = express.Router();
import { productRouter } from "../routes/productRoutes.js";
import { orderRouter } from "./orders.js";
// test route for api
indexRouter.get("/", function (req, res) {
  res.status(200).json({ message: "ok" });
});

indexRouter.use("/user", userRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/orders", orderRouter);
