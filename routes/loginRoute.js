import express from "express";
import jwt from "jsonwebtoken";
export const loginRoute = express.Router();

import { SECRET_KEY } from "../config/config.js";
import { User } from "../models/User.js";
import { userRouter } from "./user.js";
loginRoute.post("/", async (req, res) => {
  const user = {
    emailid: req.body.useremail,
    password: req.body.password,
  };
  // Verify User Id and Password

  const userCheck = await User.findOne({ emailid: req.body.email });
  if (userCheck !== undefined) {
    if (userCheck.password === user.password) {
      jwt.sign({ user }, SECRET_KEY, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          res.sendStatus(400);
        } else {
          res.status(200).json({
            token,
          });
        }
      });
    } else {
      res.status(400);
    }
  } else {
    res.status(400);
  }
});
