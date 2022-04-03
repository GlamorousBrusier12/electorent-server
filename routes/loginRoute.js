import express from "express";
import jwt from "jsonwebtoken";
export const loginRoute = express.Router();

import { SECRET_KEY } from "../config/config.js";
import { User } from "../models/User.js";
import { userRouter } from "./user.js";
loginRoute.post("/", async (req, res) => {
  const user = {
    password: req.body.password,
    useremail: req.body.useremail,
  };
  // Verify User Id and Password
  console.log(user);
  console.log(user);
  const userCheck = await User.findOne({ emailid: user.useremail });
  console.log(userCheck);
  if (userCheck !== undefined) {
    if (
      userCheck.email === user.email &&
      userCheck.password === user.password
    ) {
      console.log("Successs");
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
