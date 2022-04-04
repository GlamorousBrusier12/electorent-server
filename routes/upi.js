import express from "express";

import {
  deleteUpi,
  getAllUpis,
  getUserUpis,
  placeUpi,
  updateUpi,
} from "../controllers/upiController.js";

export const upiRouter = express.Router();

upiRouter.route("/").get(getAllUpis);
upiRouter.route("/").post(placeUpi);

upiRouter.route("/user/:userId").get(getUserUpis);

upiRouter.route("/:upiId").patch(updateUpi).delete(deleteUpi);
