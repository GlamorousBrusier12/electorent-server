import { Router } from "express";
import {
  getProducts,
  createProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

export const productRouter = Router();

productRouter.route("/").get(getProducts).post(createProducts);

productRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);
