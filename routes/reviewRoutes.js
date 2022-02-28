import { Router } from "express";

import { getReviews, createReviews } from "../controllers/reviewController.js";

export const reviewRouter = Router();

reviewRouter.route("/:productId").get(getReviews).post(createReviews);
