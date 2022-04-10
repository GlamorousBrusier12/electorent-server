import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { multerUploads } from "../middleware/multer.js";
export const userRouter = express.Router();

// test route for api
userRouter.route("/").get(getAllUsers).post(createUser);
userRouter
  .route("/:uid")
  .get(getUser)
  .patch(multerUploads, updateUser)
  .delete(deleteUser);
