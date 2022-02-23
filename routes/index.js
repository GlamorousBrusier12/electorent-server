import express from "express";
export const indexRouter = express.Router();
import {productRouter} from "../routes/productRoutes.js";
// test route for api
indexRouter.get("/", function (req, res) {
  res.status(200).json({ message: "ok" });
});

indexRouter.use("/product",productRouter);
