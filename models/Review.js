import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  data: [
    {
      userId: {
        type: Number,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      heading: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model("Reviews", reviewSchema);
