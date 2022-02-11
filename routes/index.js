import express from "express";
import { userRouter } from "./user.js";
export const indexRouter = express.Router();

// test route for api
indexRouter.get("/", function (req, res) {
  res.status(200).json({ message: "ok" });
});

indexRouter.use("/user", userRouter);
