import { Router } from "express";

import { getFaqs, createFaqs } from "../controllers/faqController.js";

export const faqRouter = Router();

faqRouter.post("/", createFaqs);
faqRouter.get("/:productId", getFaqs);
