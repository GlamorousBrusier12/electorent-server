import express from "express";
import { userRouter } from "./user.js";
export const indexRouter = express.Router();
import { productRouter } from "../routes/productRoutes.js";
import { reviewRouter } from "./reviewRoutes.js";
import { faqRouter } from "./faqRoutes.js";
// test route for api
indexRouter.get("/", function (req, res) {
  res.status(200).json({ message: "ok" });
});

indexRouter.use("/product", productRouter);
indexRouter.use("/review", reviewRouter);
indexRouter.use("/faq", faqRouter);
indexRouter.use("/user", userRouter);
