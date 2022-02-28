import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  try {
    const productId = req.params.productId;
    const reviews = await Review.find({ productId: productId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReviews = async (req, res) => {
  try {
    const productId = req.body.productId;
    const newReview = await Review.create({ productId, ...req.body });
    res.status(201).json(newReview, { message: "Posted a Review!" });
  } catch (error) {
    console.log("Error while posting Review ", error.message);
    res.status(400).end();
  }
};
