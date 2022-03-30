import express from "express";

import {
  deleteUpi,
  getAllUpis,
  getUserUpis,
  placeUpi,
  updateUpi,
} from "../controllers/upiController";

export const upiRouter = express.Router();

upiRouter.route("/").post(placeUpi);

upiRouter.route("/:userId").get(getUserUpis);

upiRouter.route("/:orderId").patch(updateUpi).delete(deleteUpi);
