import { Router } from "express";
import {
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/addressController.js";
import verifyToken from "../middleware/verifytoken.js";

export const addressRouter = Router();

// get route of the address api using address id
addressRouter.route("/:userId").get(getAddress);
addressRouter.route("/").post(verifyToken, createAddress);
addressRouter
  .route("/:id")
  .patch(updateAddress)
  .delete(verifyToken, deleteAddress);
