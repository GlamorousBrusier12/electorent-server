import express from "express";
import {
  deleteDebitCard,
  getAllDebitCards,
  getUserDebitCards,
  placeDebitCard,
  updateDebitCard,
} from "../controllers/debitCardController.js";

export const debitCardRouter = express.Router();

debitCardRouter.route("/user/:userId").get(getUserDebitCards);
debitCardRouter.route("/").post(placeDebitCard);

debitCardRouter.route("/:id").patch(updateDebitCard).delete(deleteDebitCard);
