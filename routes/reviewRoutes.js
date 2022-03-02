import { Router } from "express";

import { getReviews, createReviews } from "../controllers/reviewController.js";

export const reviewRouter = Router();

reviewRouter.get("/:productId", getReviews);

reviewRouter.post("/", createReviews);
