import express from "express";
export const indexRouter = express.Router();

// test route for api
indexRouter.get("/api", function (req, res) {
  res.status(200).json({ message: "ok" });
});
