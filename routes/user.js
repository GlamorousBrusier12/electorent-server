import express from "express";
import { createUser, getUser } from "../controllers/user.js";
export const userRouter = express.Router();

// test route for api
userRouter.post("/", createUser);
userRouter.get("/:uid", getUser);
