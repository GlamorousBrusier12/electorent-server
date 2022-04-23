import express from "express";
import jwt from "jsonwebtoken";
export const loginRoute = express.Router();

import { SECRET_KEY } from "../config/config.js";
import { User } from "../models/User.js";
import { userRouter } from "./user.js";

loginRoute.post("/", async (req, res) => {
  //Get User Email and Password from the body
  const user = {
    useremail: req.body.useremail,
    password: req.body.password,
  };
  // Verify User Id and Password
  const userCheck = await User.findOne({ email: req.body.useremail });
  if (userCheck !== undefined && userCheck !== null) {
    if (
      userCheck.email === user.useremail &&
      userCheck.password === user.password
    ) {
      jwt.sign({ user }, SECRET_KEY, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          res.json({
            token,
            userId: userCheck._id,
          });
        }
      });
    } else {
      console.log("***********wrong password error********");
      res.status(400);
    }
  } else {
    console.log("***********User already exists***********");
    res.status(400);
  }
});
