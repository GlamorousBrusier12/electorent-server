import express from "express";
import {
  deletedDeliveryAddress,
  getAllDeliveryAddresses,
  getUserDeliveryAddress,
  placeDeliveryAddress,
  updateDeliveryAddress,
} from "../controllers/deliveryAddressController";

export const deliveryAddressRouter = express.Router();

deliveryAddressRouter.route("/").post(placeDeliveryAddress);

deliveryAddressRouter.route("/:userId").get(getUserDeliveryAddress);

deliveryAddressRouter
  .route("/:orderId")
  .patch(updateDeliveryAddress)
  .delete(deletedDeliveryAddress);
