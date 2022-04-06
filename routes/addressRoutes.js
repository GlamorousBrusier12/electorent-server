import { Router } from "express";
import {
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/addressController.js";

export const addressRouter = Router();

// get route of the address api using address id
addressRouter.route("/:userId").get(getAddress);

// post route of the address api
addressRouter.route("/").post(createAddress);

// update and the delete routes for the address api using address id
addressRouter.route("/:id").patch(updateAddress).delete(deleteAddress);
