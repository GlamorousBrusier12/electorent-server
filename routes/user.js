import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import verifyToken from "../middleware/verifytoken.js";
export const userRouter = express.Router();

// test route for api
userRouter
  .route("/")
  .get(getAllUsers)
  .post(verifyToken, createUser)
  .delete(deleteUser);
userRouter.route("/:uid").get(getUser).patch(verifyToken, updateUser);
