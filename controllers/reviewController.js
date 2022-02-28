import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createReviews = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    console.log("Error while posting Review ", error.message);
    res.status(400).end();
  }
};

export const getSingleReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      res.status(404).json({ message: "Review Not Found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).end();
  }
};

export const updateReview = async (req, res) => {
  try {
    console.log("Log Statement: ", Review);
    let review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review) {
      res.status(404).json({ message: "Review Not Found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).end();
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = Review.findById(req.params.id);
    if (!review) {
      res.status(404).json({ message: "Review Not Found" });
    }
    await review.remove();
    res.status(200).json(`Review with id ${req.params.id} has been deleted.`);
  } catch (error) {
    res.status(500).end();
  }
};
