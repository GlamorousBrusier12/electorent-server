import { Router } from "express";
import {
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/addressController.js";

export const addressRouter = Router();

addressRouter.route("/:userId").get(getAddress);
addressRouter.route("/").post(createAddress);
addressRouter.route("/:id").patch(updateAddress).delete(deleteAddress);
