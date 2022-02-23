import { Router } from "express";
import {
  getProducts,
  setProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

export const productRouter = Router();

productRouter.route("/").get(getProducts).post(setProducts);

productRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);
