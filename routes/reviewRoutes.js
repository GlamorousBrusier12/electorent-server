import { Router } from "express";

import {
  getReviews,
  createReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

export const reviewRouter = Router();

reviewRouter.route("/").get(getReviews).post(createReviews);

reviewRouter
  .route("/:id")
  .get(getSingleReview)
  .patch(updateReview)
  .delete(deleteReview);
