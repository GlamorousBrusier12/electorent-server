import { Router } from "express";

import {
  getReviews,
  createReviews,
  deleteReview,
  updateReview,
} from "../controllers/reviewController.js";

export const reviewRouter = Router();

reviewRouter.get("/:productId", getReviews);
reviewRouter.post("/", createReviews);
reviewRouter.route("/:id").delete(deleteReview).patch(updateReview);
