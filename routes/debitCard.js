import express from "express";
import {
  deleteDebitCard,
  getAllDebitCards,
  getUserDebitCards,
  placeDebitCard,
  updateDebitCard,
} from "../controllers/debitCardController.js";

export const debitCardRouter = express.Router();

debitCardRouter.route("/").get(getAllDebitCards);
debitCardRouter.route("/").post(placeDebitCard);

debitCardRouter.route("/:userId").get(getUserDebitCards);

debitCardRouter
  .route("/:userId")
  .patch(updateDebitCard)
  .delete(deleteDebitCard);
