import express from "express";
import { createUser, getUser, updateUser } from "../controllers/user.js";
export const userRouter = express.Router();

// test route for api
userRouter.post("/", createUser);
userRouter.route("/:uid").get(getUser).patch(updateUser);
