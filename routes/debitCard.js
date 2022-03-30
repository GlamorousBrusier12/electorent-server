import express from "express";
import {
  deleteDebitCard,
  getAllDebitCards,
  getUserDebitCards,
  placeDebitCard,
  updateDebitCard,
} from "../controllers/debitCardController";

export const debitCardRouter = express.Router();

debitCardRouter.route("/").post(placeDebitCard);

debitCardRouter.route("/:userId").get(getUserDebitCards);

debitCardRouter
  .route("/:orderId")
  .patch(updateDebitCard)
  .delete(deleteDebitCard);
